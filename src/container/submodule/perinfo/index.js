import Title from '../title';

import './perinfo.less';

export default class Perinfo extends React.Component {
  render(){
    return (
      <div className="g-perinfo">
        <Title>个人信息</Title>
        <ul className="perinfo-con">
          <li>姓名：范伟梅</li>
          <li>性别：女</li>
          <li>籍贯：湖南</li>
          <li>年龄：26</li>
          <li>电话：15626212768</li>
          <li>邮箱：1309455832@qq.com</li>
          <li>地址：广东省广州市番禺区穗石村</li>
          <li>主页：<a target="_blank" href="https://fanweimei.com">fanweimei.com</a> </li>
          <li>英语：CET6</li>
        </ul>
      </div>
    )
  }
}
