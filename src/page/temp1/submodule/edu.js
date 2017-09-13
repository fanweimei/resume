import Title from './title';
import './sub.less';

export default class Education extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name: '华南理工大学',
          time: '2014.09-2017.07',
          profession: '计算机科学与技术',
          degree: '硕士',
          score: '20%左右'
        },
        {
          name: '北京林业大学',
          time: '2010.09-2014.07',
          profession: '食品科学与工程',
          degree: '学士',
          score: '10%左右'
        }
      ]
    }
  }
  render(){
    return (
      <div className="g-edu">
        <Title classname="edu-title">教育背景</Title>
        <ul className="edu-con">
          {
            this.state.data.map((item,index) => {
              return (
                <li key={index}>
                  <div className="edu-intro" style={{color: this.props.skin}}>
                    <span>{item.name}</span>
                    <span className="edu-time">{item.time}</span>
                  </div>
                  <div className="edu-degree">
                    <span>{item.profession}</span>
                    <span>{item.degree}</span>
                  </div>
                  <div className="edu-score">
                    班级排名：{item.score}
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
