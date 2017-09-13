import Title from '../title';
import './skill.less';

export default class Skill extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className="g-skill">
        <Title classname="skill-title">技能掌握</Title>
        <ul className="skill-con">
          <li>
            <span></span>
            熟练掌握JavaScript、HTML、CSS、Ajax等Web前端技术；
          </li>
          <li>
            对HTML5、CSS3、ES6等技术有一定的了解，熟练使用less进行前端开发；
          </li>
          <li>
            熟练掌握切图技能、切图工具（如PhotoShop)，div+css实现页面布局，flex布局、响应式布局；
          </li>
          <li>
            熟悉使用JQuery、React、Redux等前端主流框架;
          </li>
          <li>
            熟悉使用前端自动化构建工具WebPack;
          </li>
          <li>
            熟练使用各种调试、抓包工具（如fiddler)；
          </li>
          <li>
            熟悉使用版本管理Git、SVN；
          </li>
          <li>
            了解微信小程序开发、前端数据可视化、Hybrid移动端混合开发
          </li>
          <li>
            了解ActionScript2.0（3.0）、flash动画制作；
          </li>
          <li>
            了解HTTP协议、Java后台开发语言，会使用Rap进行前后端数据联调。
          </li>
        </ul>
      </div>
    )
  }
}
