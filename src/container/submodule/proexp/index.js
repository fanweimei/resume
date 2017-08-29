
import Title from '../title';
import './proexp.less';

export default class Proexp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          title: '培训助手',
          label: ['Web端','App','微信公众号'],
          text: '是一款为企业员工提供在线培训、学习和交流的平台，具有web端、移动APP、微信公众号等多个应用场景。我主要负责课程大厅、课程详情等相关组件的开发。'
        },
        {
          title: '数据可视化图表系统',
          link: 'https://www.fanweimei.com/zuopin/lw.pdf',
          label: ['Java','d3.js'],
          text: '针对现有的数据可视化工具中对复杂数据类型图表和非传统图表数据类型不能很好的支撑等问题，设计并实现了一款用于展示数据的可视化图表系统，提供了多种场景模板并支撑多种图表类型。使用XML标签定义数据源和图表类型及样式，纯Java语言构建一个后台系统，前端采用d3.js来渲染图表，增加了系统的扩展性。'
        },
        {
          title: '软装大师',
          link: 'https://www.fanweimei.com/zuopin/LoaderMaster/index.html',
          label: ['JavaScript','CSS3'],
          text: '是一款为家装设计者打造的2D在线模拟室内设计操作工具。对图片具有放大、缩小、旋转、删除、撤销，编组，镜像，调整层级等操作的功能。采用了JS动态计算图片元素位置+css3中transform的技术方案，克服了每步操作后需要保存元素的移动距离以及编组后多个元素操作出现距离计算混乱的问题。'
        },
        {
          title: '车问诊',
          link: 'https://www.fanweimei.com/zuopin/chewenzhen/html/index.html',
          label: ['Light7','微信场景'],
          text: '是一个为广大汽车用户提供针对汽车故障问诊和维修报价的在线答疑和专家咨询的交流平台。采用了light7作为项目前端的框架，基于微信公众号开发，解决了移动端中页面的适配、路由切换、模板引擎、列表缓存、图片预览等问题。'
        },
        {
          title: '广州教育局初中学科平台',
          label: ['ActionScript','Flash'],
          text: '是一款为增强广州中学教学力度的应用软件，涵盖了初中所有学科教学资源和相关的仿真实验平台。我主要完成生物圈食物链和仿真实验室平台的开发工作，基于flex平台构建、采用AS语言开发、使用flash制作页面动画。'
        }
      ]
    }
  }
  render(){
    let skin = this.props.skin;
    return (
      <div className="g-proexp">
        <Title classname="proexp-title">项目经验</Title>
        <ul className="proexp-con">
          {
            this.state.data.map((item,index) => {
              return (
                <li key={index}>
                  <div className="pro-intro">
                    <h3 style={{color: skin}}><a href={`${item.link?item.link:'javascript:'}`} target={`${item.link?'_blank':'_self'}`}>{item.title}</a></h3>
                    {
                      item.label
                      && <div className="label">
                            {
                              item.label.map((jtem,jndex) => {
                                return <span key={jndex} style={{background: skin}}>{jtem}</span>
                              })
                            }
                          </div>
                    }
                  </div>
                  <p className="pro-desc">
                    {item.text}
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
