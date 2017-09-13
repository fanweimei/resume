import Title from './title';
import './sub.less';

export default class Workexp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name: '北京易动纷享科技有限责任公司',
          category: '移动互联网',
          property: '民营',
          scale: '>1000人',
          list: [
            {
              time: '2017.07-2017.08',
              label: ['JavaScript','React','redux','Webpack'],
              text: '参与培训助手5.7版本的h5页面的开发，主要完成课程大厅列表、搜索、个人中心的开发。以及部分代码优化重构的工作，包括css兼容性问题的优化，基于react-redux的技术方案重构现有redux架构的项目。'
            },
            {
              time: '2016.10-2017.01',
              label: ['JavaScript','seaJs','Backbone','gulp'],
              text: '参与培训助手5.6版本的web端页面的开发，主要完成课程目录树、视频播放、文档预览、评论、课程推荐等所有与课程详情相关的组件的开发。'
            }
          ]
        }
      ]
    }
  }
  render() {
    let skin = this.props.skin;
    return (
      <div className="g-workexp">
        <Title classname="workexp-title">工作经验</Title>
        <ul className="workexp-con">
          {
            this.state.data.map((item,index) => {
              return (
                <li key={`i-${index}`}>
                  <h3 className="company-name" style={{color: skin}}>{item.name}</h3>
                  <div className="company-intro">行业类别：{item.category}<i>|</i>企业性质：{item.property}<i>|</i>规模：{item.scale}</div>
                  <ul className="work-list">
                    {
                      item.list.map((jtem,jndex) => {
                        return (
                          <li key={`j-${jndex}`}>
                            <div className="work-intro">
                              <div className="work-time" style={{color: skin}}>{jtem.time}</div>
                              <div className="label">
                                {
                                  jtem.label.map((ktem,kndex) => {
                                    return <span key={`k-${kndex}`} style={{background: skin}}>{ktem}</span>
                                  })
                                }
                              </div>
                            </div>
                            <p className="work-desc">{jtem.text}</p>
                          </li>
                        )
                      })
                    }

                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
