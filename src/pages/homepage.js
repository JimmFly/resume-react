import React from "react";
import myPicture from "../static/img/picture.jpg";

const HomeComponent = () => {
  return (
    <div>
      <main className="homepage">
        <section className="left">
          <h1>
            你好，我是
            <br />
            杨晋飞
          </h1>
          <p>
            欢迎来到我的个人网站，我是一名自学中的网页前端开发者。您可以在这个网站里看到我的履历和学习过程中做的项目。
          </p>
          <p>
            我在2022年之前，完全没有写过程式的经验，在一家事业单位做柜员，经历了一些事情之后决定跳出舒适圈，辞职学习前端。在此之后，每天都沉浸在敲代码的快乐中。学习前端的感觉很棒，做出来的东西可以很直观的看到效果，知识也在不断更新，经常能够从学到新东西并成功使用中获得强烈的成就感。
          </p>
          <p>本简历的源码 https://github.com/JimmFly/resume-react</p>
        </section>
        <section className="right">
          <div className="myPic">
            <img src={myPicture} alt="" />
          </div>
          <div className="box">
            <div className="box1">网页前端开发者 HTML5+CSS3+REACT</div>
            <div className="box2"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeComponent;
