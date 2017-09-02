import echarts from 'echarts';
import Title from '../title';
import './skill.less';

export default class Skill extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name: 'html(5)',
          value: 90
        },
        {
          name: 'css(3)',
          value: 90
        },
        {
          name: 'JavaScript',
          value: 90
        },
        {
          name: 'Jquery',
          value: 90
        },
        {
          name: 'less',
          value: 80
        },
        {
          name: 'react',
          value: 70
        },
        {
          name: 'webpack',
          value: 70
        },
        {
          name: 'photoshop',
          value: 50
        },
        {
          name: '微信小程序',
          value: 60
        },
        {
          name: 'd3.js',
          value: 40
        },
        {
          name: 'Java',
          value: 50
        },
        {
          name: 'git/svn',
          value: 80
        }
      ],
      rings: []
    }
  }
  render(){
    let { data } = this.state;
    return (
      <div className="g-skill">
        <Title classname="skill-title">技能掌握</Title>
        <ul className="skill-con clearfix">
          {
            data.map((item,index) => {
              return (
                <li key={item.name}>
                  <p className="skill-name">{item.name}</p>
                  <div ref={`ring-${index}`} data-index={index} data-value={item.value} className="skill-ring"></div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentDidMount(){
    this.state.data.map((item,index) => {
      this.drawRing(this.refs['ring-'+index], this.props.skin);
    });
  }

  componentWillReceiveProps(nextProps){
    let {data, rings} = this.state;
    //更新状态的颜色值
    if(data.length==rings.length){
      data.map((item,index) => {
        this.drawRing(this.refs['ring-'+index], nextProps.skin, rings[index]);
      });
    }
  }

  drawRing(dom, skin, rg){
    let value = dom.getAttribute('data-value');
    let index = dom.getAttribute('data-index');
    let ring = rg;
    if(!ring){
      ring = echarts.init(dom);
      this.state.rings.push(ring);
    }
    let option = {
      series: [
          {
              type:'pie',
              radius: ['70%', '100%'],
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              color: [skin,'#e7e6e6'],
              hoverAnimation: false,
              data:[
                {
                  value:value,
                  itemStyle: {
                    emphasis: {color:'#3ca7a9'}
                  }
                },
                {
                  value:100-value,
                  itemStyle: {
                    emphasis: {color: '#e7e6e6'}
                  }
                }
              ]
          }
      ]
    };
    ring.setOption(option);
  }
}
