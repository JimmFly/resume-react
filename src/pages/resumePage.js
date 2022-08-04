import React from "react";
import picture2 from "../static/img/pic2.jpg";
import css3 from "../static/icon/css3.svg";
import html5 from "../static/icon/html-5.svg";
import js from "../static/icon/javascript.svg";
import rt from "../static/icon/react.svg";
import ant from "../static/icon/antd.svg";

const ResumePage = () => {
  return (
    <>
      <main className="resumePage">
        <section className="table">
          <table>
            <tr>
              <td style={{ width: "20%" }}>自我介绍</td>
              <td style={{ width: "80%" }}>
                毕业后，我在事业单位做了两年柜员，枯燥无聊的生活一直在重复，看不到变化的希望使我对生活失去了热情。2020年年初，因为疫情居家了一段时间，从朋友口中了解到了前端开发，萌生了浓厚的兴趣，向单位提交了转部门的申请，投入了前端的学习。开始学习之后我感觉整个人都活了过来，每天都能汲取新的知识，做成一个功能获得的成就感，都让我对生活充满希望，对学习充满动力。
              </td>
            </tr>
            <tr>
              <td>学历</td>
              <td>
                大专 深圳信息职业技术学院 电子商务 <br />
                本科 海口经济学院 财务管理
              </td>
            </tr>
            <tr>
              <td>经历</td>
              <td>
                <ol>
                  <li>深圳市前海不动产登记中心 窗口服务岗</li>
                  <li>深圳市前海不动产登记中心 前端开发岗</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>语言</td>
              <td>
                <ul>
                  <li>普通话: 精通</li>
                  <li>客家话: 精通</li>
                  <li>粤语: 精通</li>
                  <li>英文: 一般</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>专长</td>
              <td>
                <img src={css3} alt="" />
                <img src={html5} alt="" />
                <img src={js} alt="" />
                <img src={ant} alt="" />
                <img src={rt} alt="" />
              </td>
            </tr>
            <tr>
              <td>开发经验</td>
              <td>
                在之前的工作中，我负责的是维护单位内部网站的静态页面（比如单位的新闻），协助高级前端维护旧代码和开发的前后端交互的新功能。自己练习了许多小项目，印象较深刻的就是这个前后端分离的项目，用node跟express搭建简单的后端.使用react脚手架搭建的前端项目，react-router配置路由，使用axios发送注册、登录等请求到后端服务器，通过调用后端api获取用户信息和课程列表。结合后端api与react-router做了简单的鉴权，动态显示nav。动态显示用户信息以及名下的课程。
              </td>
            </tr>
          </table>
        </section>
        <section className="pic">
          <img src={picture2} alt="" />
          <div className="box3"></div>
        </section>
      </main>
    </>
  );
};

export default ResumePage;
