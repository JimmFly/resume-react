import React from "react";
import pic3 from "../static/img/pic3.jpg";

const ContactPage = () => {
  return (
    <>
      <main>
        <section className="form">
          <form>
            <div>
              <label for="name">姓名：</label>
              <input type="text" name="name" value="仅供测试" />
            </div>
            <div>
              <label for="email">邮箱：</label>
              <input type="email" name="email" value="仅供测试" />
            </div>
            <div>
              <label for="phone">电话：</label>
              <input type="text" name="phone" value="仅供测试" />
            </div>
            <div>
              <label for="need">需求：</label>
              <textarea
                name="need"
                id="need"
                rows="10"
                value="仅供测试"
              ></textarea>
            </div>
            <button>提交</button>
          </form>
        </section>
        <hr />
        <section className="content">
          <img className="pic3" src={pic3} alt="" />
          <h2>我的电话: 13008857268</h2>
          <h2>我的Email : yangjinfei001@gmail.com</h2>
          <h2>方便联络时间 : 每日早上九点到晚上九点</h2>
          <h2>其他联络方式 : 微信手机同号</h2>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
