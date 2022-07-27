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
                毕业后，我在事业单位做了四年柜员，枯燥无聊的生活一直在重复，看不到变化的希望使我对生活失去了热情。就在今年年初，发生了一些事情激发了我的摇滚精神，重新振作起来，对目前的生活反抗。经同学推荐投入了前端的学习，我感觉整个人都活了过来，每天都能汲取新的知识，做成一个功能获得的成就感，都让我对生活充满希望，对学习充满动力。
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
                  <li>华润置地南山冰场分公司 冰场运维</li>
                  <li>深圳市前海不动产登记中心 窗口服务岗</li>
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
                从学习至今练习了许多小项目，印象较深刻的就是这个前后端分离的项目，用node跟express搭建简单的后端.使用react脚手架搭建的前端项目，react-router配置路由，使用axios发送注册、登录等请求到后端服务器，通过调用后端api获取用户信息和课程列表。结合后端api与react-router做了简单的鉴权，动态显示nav。动态显示用户信息以及名下的课程。
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
