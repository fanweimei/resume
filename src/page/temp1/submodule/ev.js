import Title from './title';
import './sub.less';

export default class Evalution extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          label: 'zhizhuo',
          text: '一份追求完美体验的执着'
        },
        {
          label: 'zeren',
          text: '一颗遵守极致规范的责任'
        },
        {
          label: 'jingshen',
          text: '一种速学新型知识的精神'
        },
        {
          label: 'kuaile',
          text: '在编码中获得快乐'
        },
        {
          label: 'jingyan',
          text: '在寻找解决问题的方案中积累经验'
        }
      ]
    }
  }
  render(){
    return (
      <div className="g-ev">
        <Title classname="ev-title">自我描述</Title>
        <div className="ev-con">
          <ul>
            {
              this.state.data.map((item,index) => {
                return (
                  <li key={index}>
                      <span className={`icon-${item.label}`} style={{color: this.props.skin}}></span>
                      {item.text}
                  </li>
                )
              })
            }
          </ul>
          <p>我是一个不断追求进步、敢于接受新的挑战、对任何事物都充满热情的前端开发者。希望可以找到一份接触更多新技术的工作！</p>
        </div>
      </div>
    )
  }
}
