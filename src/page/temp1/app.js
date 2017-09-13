import pubsub from '~/lib/pubsub';
import Profile from './submodule/profile';
import Perinfo from './submodule/perinfo';
import Skill from './submodule/skill'
import Evalution from './submodule/ev';

import Proexp from './submodule/proexp';
import Workexp from './submodule/workexp';
import Education from './submodule/edu';

import './app.less';

export default class App extends React.Component {
  constructor(props){
    super(props);
    let cur = 0;
    if(window.localStorage){
      cur = parseInt(localStorage.getItem('skinIndex'))||cur;
    }
    this.state = {
      cur: cur,
      skins: ['#359ea0','#f74341','#152d4d','#20a4ff','#ffb900','#444444','#a17953','#5871c5','#630c7c','#000'],
      hideSkin: false,
      isloadpdf: false
    }
  }
  render() {
    let cur = this.state.cur;
    let hideSkin = this.state.hideSkin;
    let skin = this.state.skins[cur];
    return (
      <div className="g-page">
        <div className="g-tool" onMouseOver={this.toggleTooltip.bind(this,true)} onMouseOut={this.toggleTooltip.bind(this,false)}>
          <div className="tool-item skin">
             <i className="icon-skin" data-value="更换主题" onClick={this.hideSkinList.bind(this)} style={{color: skin}}></i>
             <div className={`skin-list ${hideSkin?'hide':''}`}>
               {
                 this.state.skins.map((item,index) => {
                   return <span key={index} className={`${cur==index?'active':''}`} data-color={item} onClick={this.changeSkin.bind(this,index)} style={{background: item}}></span>
                 })
               }
             </div>
          </div>
          <a className="tool-item icon-code" target="_blank" href="https://github.com/fanweimei/resume.git" data-value="查看源码" style={{color: skin}}></a>
          {
            this.state.isloadpdf
            && <div className="tool-item icon-xiazai" data-value="下载简历" onClick={this.download.bind(this)} style={{color: skin}}></div>
          }
        </div>
        <section id="j-container" className="container">
          <aside className="g-conl">
            <Profile skin={skin} />
            <Perinfo />
            <Skill skin={skin} />
            <Evalution skin={skin} />
          </aside>
          <article className="g-conr">
            <div className="online-resume">在线简历：fanweimei.com/resume</div>
            <Proexp skin={skin} />
            <Workexp skin={skin} />
            <Education skin={skin} />
          </article>
        </section>
      </div>
    );
  }
  componentDidMount(){
    //技能图渲染完后，预先生产简历文档
    setTimeout(() => {
      this.buildPDF();
    },2000);
  }
  buildPDF(){
    let container = document.getElementById('j-container');
    let width = container.offsetWidth; //获取dom 宽度
    let height = container.offsetHeight; //获取dom 高度
    let canvas = document.createElement("canvas"); //创建一个canvas节点
    let scale = 2; //定义任意放大倍数 支持小数
    canvas.width = width * scale; //定义canvas 宽度 * 缩放
    canvas.height = height * scale; //定义canvas高度 *缩放
    canvas.getContext("2d").scale(scale,scale); //获取context,设置scale
    let opts = {
        background: '#fff',
        scale:scale, // 添加的scale 参数
        canvas:canvas, //自定义 canvas
        logging: true, //日志开关
        width:width, //dom 原始宽度
        height:height //dom 原始高度
    };
    html2canvas(container, opts).then(function (canvas) {
      let dataUrl = canvas.toDataURL('image/jpeg',1.0);
      this.pdf = new jsPDF('', 'pt', 'a4');
      //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
      this.pdf.addImage(dataUrl, 'JPEG', 0, 0, 595.28, 592.28/canvas.width * canvas.height );
      this.setState({
        isloadpdf: true
      })
    }.bind(this));
  }
  changeSkin(index){
    this.setState({
      cur: index
    });
    if(window.localStorage){
      localStorage.setItem('skinIndex',index);
    }
  }
  hideSkinList(){
    let hideSkin = !this.state.hideSkin;
    this.setState({
      hideSkin: hideSkin
    });
  }
  toggleTooltip(flag,e){
    let skin = this.state.skins[this.state.cur];
    if($(e.target).attr('class').indexOf('icon')==-1){
      return;
    }
    if(flag){
      if(!this.tooltip){
        this.tooltip = $('<div>hello</div');
        $('body').append(this.tooltip);
      }
      this.tooltip.addClass('tooltip').html($(e.target).attr('data-value'));
      this.tooltip.css({
        top: $(e.target).offset().top+10+'px',
        color: skin
      }).show();
    }
    else {
      this.tooltip && this.tooltip.hide();
    }
  }
  download(){
    this.pdf.save('范伟梅-web前端开发.pdf');
  }
}
