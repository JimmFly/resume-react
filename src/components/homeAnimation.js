import React, { useState, useRef } from "react";

const HomeAnimation = () => {
  const [style1, setStyle] = useState({});
  const animationRef = useRef();
  const handleAnimation = () => {
    setStyle({
      transition: "all 1s ease",
      opacity: "0",
      pointerEvents: "none",
    });
  };

  return (
    <div className="animation" ref={animationRef} style={style1}>
      <div className="logo">
        <svg
          width="127"
          height="127"
          viewBox="0 0 127 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 26.75H6.5V29.25V37.875V40.375H9H21.7621C18.2761 56.481 11.5844 74.4384 4.94123 84.0817L3.94075 85.534L4.9733 86.9637C6.49248 89.0672 8.62877 92.8762 9.53878 95.265L11.3 99.8881L13.9773 95.728C17.1974 90.7243 20.3143 83.9053 23.125 76.2646V119.875V122.375H25.625H34.375H36.875V119.875V62.4448C38.9056 66.4268 40.6949 70.1385 41.6848 72.5682L43.2156 76.3258L45.8836 73.2688L51.8836 66.3938L53.057 65.0492L52.1666 63.5026C50.1033 59.9191 41.7249 46.5227 37.4896 40.375H49.125H51.625V37.875V29.25V26.75H49.125H36.875V5V2.5H34.375H25.625H23.125V5V26.75H9ZM50.25 8.5H47.75V11V19.875V22.375H50.25H84.3592C75.0365 30.0635 65.9792 36.2889 62.5735 38.3655L62.5303 38.3918L62.4883 38.4199C60.0955 40.015 57.7796 41.4254 55.6819 42.489C53.5489 43.5705 51.8005 44.2106 50.5086 44.402L46.9353 44.9314L48.6896 48.0891C49.894 50.2569 51.7991 54.4519 52.3516 56.3304L53.4641 60.1129L56.3571 57.5413C56.3878 57.5265 56.525 57.4562 56.8357 57.3627C57.2873 57.2268 57.9314 57.0926 58.7863 56.9777C60.4915 56.7484 62.8063 56.625 65.625 56.625H68.0983C62.6032 68.7822 53.848 78.9509 43.3056 85.5015L39.7938 87.6836L43.3575 89.7798C45.3401 90.9461 48.6616 93.4471 49.9822 94.7678L51.4955 96.281L53.224 95.0192C65.4128 86.1214 76.3196 72.8583 82.5859 56.625H90.8304C82.6863 81.6688 68.4975 100.804 47.8949 112.449L44.2999 114.481L47.7669 116.724C49.8709 118.085 53.3059 120.591 54.6072 121.893L56.0258 123.311L57.718 122.234C79.913 108.098 95.654 86.1095 104.934 56.625H108.776C107.71 72.4717 106.594 83.8577 105.387 91.8618C104.669 96.6277 103.929 100.123 103.172 102.616C102.393 105.182 101.681 106.393 101.203 106.887L101.138 106.954L101.079 107.025C100.634 107.559 100.353 107.727 100.147 107.811C99.8994 107.912 99.4957 108 98.625 108C96.4438 108 91.9007 107.878 86.8678 107.387L82.1502 106.927L84.4345 111.08C85.618 113.232 86.5202 116.608 86.6278 118.869L86.7334 121.086L88.9469 121.244C94.2337 121.621 99.5074 121.634 102.863 121.239C104.782 121.098 106.606 120.738 108.348 119.887C110.11 119.026 111.629 117.739 113.053 115.967C114.438 114.332 115.549 112.06 116.506 109.066C117.475 106.035 118.335 102.105 119.126 97.0422C120.707 86.9227 122.056 71.9896 123.368 50.0615C123.435 49.3096 123.498 48.1261 123.544 47.1658C123.568 46.6676 123.588 46.2135 123.601 45.884C123.608 45.7191 123.614 45.5852 123.617 45.4923L123.622 45.3847L123.623 45.3563L123.623 45.3489L123.623 45.3469L123.623 45.3463V45.3462L121.125 45.25L123.623 45.3461L123.723 42.75H121.125H117.5H115H111.875H109.375H80.0261C90.5126 35.5911 101.281 26.9143 112.161 17.2435L114.421 15.2341L112.023 13.3921L105.023 8.01713L103.887 7.14538L102.561 7.68315L100.546 8.5H50.25Z"
            stroke="white"
            strokeWidth="2"
            id="first"
            className="thePaths"
          />
        </svg>
        <svg
          width="121"
          height="121"
          viewBox="0 0 121 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 57.625H18.5V60.125V115.125V117.625H21H30.375H32.875V115.125V111.375H89.125V114.625V117.125H91.625H101.375H103.875V114.625V60.125V57.625H101.375H21ZM89.125 98.25H32.875V90.375H89.125V98.25ZM89.125 70.875V77.875H32.875V70.875H89.125ZM11.875 2.625H9.375V5.125V13.625V16.125H11.875H17.3999L15.7885 16.6034L12.7146 17.516L14.3493 20.2745C18.0462 26.5131 21.7398 34.7238 23.5553 40.375H5.375H2.875V42.875V51.625V54.125H5.375H115.75H118.25V51.625V42.875V40.375H115.75H95.7029C99.3675 34.8488 103.529 27.4353 106.971 20.7726L108.336 18.1314L105.5 17.24L101.952 16.125H110.125H112.625V13.625V5.125V2.625H110.125H11.875ZM83.0386 40.375H80.25V16.125H93.6065C91.0157 22.4951 86.3959 31.5868 82.7949 36.9882L81.0168 39.6554L83.0386 40.375ZM27.1418 16.125H40.25V40.375H34.7918L35.551 40.1182L37.8934 39.3259L37.1268 36.9749C35.2603 31.2508 31.3028 22.795 27.1418 16.125ZM65.875 16.125V40.375H54.5V16.125H65.875Z"
            stroke="white"
            strokeWidth="2"
            id="second"
            className="thePaths"
          />
        </svg>
        <svg
          width="123"
          height="115"
          viewBox="0 0 123 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.375 3H2.875V5.5V15.125V17.625H5.375H67.605C68.2657 44.0633 69.9848 66.065 74.3377 82.0626C76.8407 91.2614 80.2768 98.7249 85.0932 103.915C89.9936 109.196 96.2131 112 103.875 112C106.38 112 108.701 111.559 110.742 110.383C112.803 109.195 114.354 107.388 115.531 105.043C117.803 100.518 118.872 93.5676 119.495 83.7839L119.598 82.1715L118.17 81.4155C116.331 80.4421 113.519 78.2396 111.463 76.3045L107.448 72.5256L107.252 78.0358C107.002 85.0363 106.567 90.2279 105.782 93.6432C105.387 95.3645 104.95 96.4095 104.559 96.9786C104.377 97.244 104.251 97.3374 104.212 97.3625C104.198 97.3711 104.193 97.374 104.185 97.3753C100.336 97.3843 97.0795 95.5332 94.2242 91.5337C91.2925 87.4273 88.9189 81.2092 87.0802 73.0004C85.9796 68.0868 85.0879 62.5437 84.3737 56.4426C93.7185 61.8968 103.038 68.0466 108.22 72.6237L110.366 74.5198L111.955 72.1367L116.955 64.6367L118.197 62.7735L116.482 61.3345C110.535 56.3471 100.159 49.8831 90.2109 44.4672C98.7233 37.5442 107.987 29.0226 115.322 21.2113L117.579 18.8083L114.656 17.2835L106.031 12.7835L104.249 11.8538L102.959 13.3944C97.7936 19.5593 90.1106 27.2243 82.5921 33.8232C82.1635 25.0329 81.9429 15.544 81.875 5.48311L81.8582 3H79.375H76.25H73.75H69.875H67.3405H5.375Z"
            stroke="white"
            strokeWidth="2"
            id="third"
            className="thePaths"
          />
        </svg>
        <br />
        <svg
          width="114"
          height="118"
          viewBox="0 0 114 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.875 3H5H2.5V5.5V112.75V115.25H5H14H16.5V112.75V97.5475L17.1074 97.9048C19.1079 99.0816 22.7979 101.833 23.9822 103.018L25.9681 105.004L27.7106 102.801C34.8009 93.8391 39.6209 82.9893 42.9565 70.4047C45.4907 73.8384 47.6748 77.0658 49.3477 79.8968L51.1336 82.9191L53.4057 80.2431L59.0307 73.6181L60.2018 72.2388L59.2576 70.6954C56.2413 65.7649 51.708 59.7219 46.4549 53.4955C48.217 42.3579 49.2529 30.1672 49.9559 17H69.5104C69.2602 24.5351 68.884 31.6985 68.2915 38.4648C65.4996 35.6405 62.6888 32.9253 59.9385 30.4064L58.1537 28.7717L56.462 30.5027L51.087 36.0027L49.3255 37.8052L51.1422 39.5521C56.0704 44.2907 61.2612 49.7643 66.1698 55.3466C65.8309 57.3137 65.4607 59.2365 65.0561 61.114C62.1088 74.7913 57.3734 85.8827 49.7799 94.1881L47.6978 96.4654L50.3575 98.0298C51.285 98.5754 52.6868 99.5628 54.0326 100.621C55.4173 101.71 56.513 102.696 56.9545 103.225L58.8738 105.529L60.7946 103.227C68.6747 93.7825 73.7802 82.2165 77.1391 68.6449C80.4997 73.0265 83.3793 77.1452 85.4792 80.6578L87.2884 83.6841L89.5456 80.9755L95.1706 74.2255L96.3171 72.8496L95.3832 71.3214C91.9206 65.6553 86.5489 58.65 80.3801 51.5249C81.8684 40.9572 82.7052 29.4357 83.2398 17H96.875V101C96.875 101.091 96.8727 101.17 96.8691 101.237C96.7709 101.245 96.6491 101.25 96.5 101.25H96.4265L96.3532 101.254C94.3333 101.373 87.1747 101.499 79.6228 101.128L75.1526 100.908L77.3095 104.83C78.5394 107.066 79.8387 110.941 80.2986 113.24L80.7005 115.25H82.75C88.0653 115.25 92.3605 115.188 95.8146 114.947C99.2438 114.708 102.025 114.283 104.236 113.472L104.303 113.447L104.369 113.419C106.669 112.422 108.469 110.941 109.625 108.715C110.734 106.578 111.125 103.991 111.125 101V5.5V3H108.625H106.875H104.375H99.375H96.875ZM16.5 17H36.3557C36.0145 25.2852 35.5108 33.156 34.7308 40.5638C31.7232 37.472 28.672 34.5016 25.6844 31.7776L23.8788 30.1313L22.1916 31.8988L16.9416 37.3988L16.5 37.8615V17ZM17.0191 40.9288C22.0816 45.7869 27.3886 51.44 32.3223 57.1596C32.0902 58.3607 31.8462 59.5454 31.5895 60.7135C28.5783 74.4173 23.8681 85.6544 16.5 94.0964V40.4308L17.0191 40.9288Z"
            stroke="white"
            strokeWidth="2"
            id="fourth"
            className="thePaths"
          />
        </svg>
        <svg
          width="129"
          height="122"
          viewBox="0 0 129 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.125 3.375H11.625V5.875V14.625V17.125H14.125H57.5755C56.3968 20.5524 55.0193 24.1287 53.6947 27.25H26.375H23.875V29.75V88V90.5H26.375H35.875H38.375V88V40.875H97.375V87.875V90.1578C91.2344 87.0245 85.0024 84.0737 79.4872 81.7032L77.7838 80.971L76.5887 82.3885L71.2137 88.7635L69.0914 91.2806L72.0861 92.6489C86.5152 99.2415 105.07 109.525 113.978 116.359L115.926 117.853L117.455 115.933L123.33 108.558L124.972 106.497L122.828 104.966C116.869 100.709 107.471 95.3267 97.7999 90.375H99.875H109.875H112.375V87.875V29.75V27.25H109.875H68.8082C70.3868 24.0361 71.9871 20.5607 73.5027 17.125H121.875H124.375V14.625V5.875V3.375H121.875H14.125ZM62.875 43.75H60.375V46.25V68.875C60.375 75.144 59.1797 81.4222 52.7574 87.3505C46.1545 93.4455 33.7934 99.3921 10.7546 104.05L6.00508 105.01L9.54015 108.324C11.2919 109.966 13.7623 113.476 14.6691 115.176L15.5552 116.838L17.3967 116.445C41.8903 111.219 56.3828 104.148 64.7433 95.8703C73.2359 87.4621 75.125 78.0917 75.125 69.125V46.25V43.75H72.625H62.875Z"
            stroke="white"
            strokeWidth="2"
            id="fifth"
            className="thePaths"
          />
        </svg>
        <svg
          width="123"
          height="127"
          viewBox="0 0 123 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.625 24.25H3.125V26.75V35.5V38H5.625H117.375H119.875V35.5V26.75V24.25H117.375H92.9194C95.8094 19.9778 98.7381 15.3694 101.382 11.0564L103.039 8.3526L100.023 7.37242L90.0227 4.12242L87.9132 3.43683L86.9813 5.44969C84.4213 10.9793 80.1263 18.5131 76.2239 24.25H48.7841L48.3725 23.4051C45.8635 18.255 40.456 10.6854 35.4768 5.19546L34.3345 3.93605L32.7435 4.53558L24.1185 7.78557L20.726 9.0639L23.1267 11.7805C26.3879 15.4708 29.7983 20.2198 32.1833 24.25H5.625ZM24.875 121.375V96.875H47.625V110.886C45.9354 110.996 40.3801 110.998 34.2249 110.752L29.894 110.579L31.9127 114.414C33.0882 116.648 34.364 119.927 34.8036 122.015L35.2215 124H37.25H37.3272C41.5143 124 45.0817 124 48.023 123.807C50.9498 123.615 53.5249 123.221 55.6253 122.291C57.7811 121.364 59.439 120.011 60.4761 117.982C61.4625 116.052 61.75 113.768 61.75 111.25V46.625V44.125H59.25H55.625H53.125H50.125H47.625H13.5H11V46.625V121.375V123.875H13.5H22.375H24.875V121.375ZM24.875 84.5V76.875H47.625V84.5H24.875ZM24.875 57.25H47.625V64.5H24.875V57.25ZM74.375 45.25H71.875V47.75V99.125V101.625H74.375H83.25H85.75V99.125V47.75V45.25H83.25H74.375ZM99.75 41.5H97.25V44V110.233C97.1677 110.241 97.076 110.248 96.9741 110.255C94.9692 110.372 88.324 110.376 80.7069 110.126L76.3184 109.982L78.4345 113.83C79.701 116.133 81.1041 119.893 81.5485 122.115L81.9505 124.125H84C88.8809 124.125 92.9578 124.063 96.3196 123.822C99.66 123.582 102.456 123.156 104.711 122.356L104.744 122.344L104.777 122.331C107.13 121.421 108.964 120.041 110.108 117.842C111.187 115.769 111.5 113.247 111.5 110.375V44V41.5H109H99.75Z"
            stroke="white"
            strokeWidth="2"
            id="sixth"
            className="thePaths"
          />
        </svg>
        <svg
          width="128"
          height="126"
          viewBox="0 0 128 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.125 47.875H47.9609C48.1344 46.8213 48.3035 45.7869 48.4677 44.7757L48.8499 42.4219L46.5168 41.929L43.3028 41.25H48.875H51.375V38.75V30.125V27.625H48.875H36.125V6.625V4.125H33.625H25.125H22.625V6.625V27.625H9.375H6.875V30.125V38.75V41.25H9.375H18.4361L11.7002 42.4114L9.15567 42.8501L9.67636 45.3791C12.2775 58.0131 14.25 74.4636 14.25 85.25V88.1855L17.1481 87.7181L24.8981 86.4681L27.0243 86.1252L26.9998 83.9716C26.8725 72.7621 24.7191 56.0859 21.8149 43.0802L21.4062 41.25H34.7181L34.6332 42.298C33.5165 56.0701 30.5331 75.9451 27.8158 87.5553L27.7913 87.66C19.8138 89.3876 12.4624 90.9363 6.54091 92.0425L3.9472 92.5271L4.57083 95.0909L6.82083 104.341L7.40967 106.762L9.83247 106.181C10.6737 105.98 11.5335 105.774 12.4104 105.564C23.7231 102.855 37.8715 99.4672 51.5 95.9607V119.875V122.375H54H62.5H65V119.875V81.125H71V118.625V121.125H73.5H81H83.5V118.625V81.125H90V118.375V120.875H92.5H100.125H102.625V120.342C102.637 120.408 102.648 120.472 102.659 120.536L103.007 122.625H105.125H105.229C107.956 122.625 110.34 122.625 112.383 122.426C114.453 122.224 116.357 121.804 118.115 120.864C119.913 120.03 121.134 118.708 121.829 116.923C122.475 115.265 122.625 113.312 122.625 111.25V70.5V68H120.125H118.75H116.25H111.625H109.125H90.8662C91.2506 66.7859 91.6397 65.54 92.0316 64.285C92.3339 63.317 92.6378 62.3436 92.9427 61.375H122.75H125.25V58.875V50.375V47.875H122.75H50.125ZM41.077 84.7593C43.3615 74.611 45.7261 61.3273 47.625 49.9051V50.375V58.875V61.375H50.125H77.6686C77.2632 63.6098 76.8152 65.8777 76.3553 68H54H51.5V70.5V82.4854L50.5947 82.6819C47.4231 83.3703 44.2364 84.0674 41.077 84.7593ZM102.625 110.128V81.125H109.125V110.195C107.848 110.239 105.471 110.225 102.625 110.128ZM110.333 110.121C110.333 110.122 110.324 110.123 110.303 110.124C110.322 110.121 110.332 110.121 110.333 110.121ZM81.5 2.75H79V5.25V30.25H66.75V11.375V8.875H64.25H55.5H53V11.375V41V43.5H55.5H118.5H121V41V11.375V8.875H118.5H109.5H107V11.375V30.25H93V5.25V2.75H90.5H81.5Z"
            stroke="white"
            strokeWidth="2"
            id="seventh"
            className="thePaths"
          />
        </svg>
        <svg
          width="127"
          height="120"
          viewBox="0 0 127 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.125 2.75H11.625V5.25V14.125V16.625H14.125H37V44.5C37 45.4584 36.9942 46.4169 36.981 47.375H9.5H7V49.875V58.875V61.375H9.5H36.0383C35.355 66.3659 34.22 71.2763 32.3727 76.0324C28.4976 86.0096 21.4253 95.463 8.43479 103.499L5.03346 105.603L8.41502 107.739C10.4988 109.055 13.6623 112.087 15.1391 114.019L16.5264 115.833L18.4583 114.615C33.2963 105.26 41.6191 93.8874 46.1855 81.6723C48.6638 75.0428 50.0203 68.2042 50.7411 61.375H81.5V112.125V114.625H84H93.625H96.125V112.125V61.375H121.625H124.125V58.875V49.875V47.375H121.625H96.125V16.625H117.625H120.125V14.125V5.25V2.75H117.625H14.125ZM51.5 44.5V16.625H81.5V47.375H51.4843C51.4952 46.4132 51.5 45.4546 51.5 44.5Z"
            stroke="white"
            strokeWidth="2"
            id="eighth"
            className="thePaths"
          />
        </svg>
        <svg
          width="138"
          height="129"
          viewBox="0 0 138 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0573 114.256C33.3566 104.87 44.8364 93.056 53.4765 78.9396C57.6796 86.0173 62.6068 92.3768 68.2696 97.9921C58.3982 104.38 47.0791 108.948 35.2833 111.821L31.1214 112.835L34.0512 115.96C35.6999 117.719 37.7967 121.085 38.6959 123.22L39.5449 125.237L41.6562 124.662C55.213 120.975 68.2205 115.456 79.5889 107.526C90.8792 115.575 104.36 121.383 120.092 124.817L121.991 125.232L122.861 123.493C124.027 121.162 126.492 117.559 128.21 115.949L131.778 112.604L126.977 111.671C113.151 108.985 101.152 104.399 91.0463 98.1255C100.981 88.5338 108.941 76.3927 113.878 61.1452L114.568 59.0161L112.528 58.096L106.153 55.221L105.421 54.8912L104.635 55.0486L103.002 55.375H102.875H101.375H98.875H64.6781C65.6709 52.6448 66.5992 49.8529 67.4677 47H122.25H124.75V44.5V35.5V33H122.25H108.785L114.91 28.8141L117.077 27.3337L115.494 25.2414C111.885 20.4736 104.529 12.6189 99.163 7.12767L97.7895 5.7223L96.0995 6.72487L88.7245 11.0999L86.0486 12.6873L88.175 14.9586C93.5188 20.6667 100.227 28.3295 103.721 33H71.1585C72.9158 25.2479 74.3308 17.1059 75.4777 8.58341L75.8039 6.1587L73.3868 5.78011L63.0118 4.15511L60.4606 3.75552L60.1439 6.31834C58.9801 15.7343 57.4256 24.6348 55.3881 33H38.6355C41.5009 26.9338 44.266 19.9057 46.2734 13.0804L47.0649 10.3893L44.3008 9.91153L34.1758 8.16153L31.794 7.74986L31.3023 10.1164C29.3789 19.3727 24.6528 29.1011 23.2952 31.6963C22.6006 32.9675 21.963 33.8995 21.383 34.5388C20.7954 35.1863 20.3763 35.4128 20.1398 35.4855L17.4457 36.3145L18.5905 38.8903C19.5251 40.9932 20.9876 45.3668 21.6138 47.3707L22.9151 51.5349L25.8373 48.3204C25.8441 48.3165 25.98 48.2031 26.3877 48.0463C26.8614 47.8641 27.5617 47.6767 28.5487 47.5133C30.5243 47.1865 33.3683 47 37.25 47H51.3412C43.1646 71.0725 29.7961 89.8514 8.45783 102.735L5.34373 104.615L8.21515 106.848C10.2946 108.466 13.4817 111.784 14.6899 113.541L16.0344 115.497L18.0573 114.256ZM63.3787 69.375H94.6876C90.7929 77.0624 85.5732 83.7251 79.3945 89.4109C72.942 83.6185 67.5936 76.9088 63.3787 69.375ZM26.3782 47.1717C26.378 47.1717 26.3799 47.1683 26.3844 47.1615C26.3806 47.1682 26.3784 47.1716 26.3782 47.1717Z"
            stroke="white"
            strokeWidth="2"
            id="ninth"
            className="thePaths"
          />
        </svg>
        <svg
          width="130"
          height="126"
          viewBox="0 0 130 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 42.75H10.25V45.25V53.625V56.125H12.75H52.9118C47.9282 59.0459 42.8032 61.7991 37.5655 64.375H36.375V64.9565C27.5359 69.2444 18.3841 73.0284 9.05597 76.263L5.28501 77.5705L8.10723 80.3928C9.85012 82.1357 12.6831 85.814 13.6655 87.6697L14.7027 89.6289L16.772 88.8335C23.3821 86.2928 29.9317 83.5 36.375 80.4594V120.125V122.625H38.875H48.25H50.75V120.125V118.5H96.625V119.625V122.125H99.125H108.875H111.375V119.625V66.875V64.375H108.875H65.6741C69.8259 61.7403 73.8926 58.9899 77.8593 56.125H124.125H126.625V53.625V45.25V42.75H124.125H94.6592C104.251 34.3212 112.993 25.1109 120.611 15.1431L122.402 12.8005L119.798 11.4172L111.798 7.16721L109.904 6.16089L108.621 7.88017C105.538 12.0136 102.197 16.0276 98.625 19.9132V18.25H96.125H67.5V5V2.5H65H55.875H53.375V5V18.25H23.75H21.25V20.75V29.125V31.625H23.75H53.375V42.75H12.75ZM86.7453 31.625C82.4296 35.4956 77.8806 39.2076 73.1313 42.75H67.5V31.625H86.7453ZM96.625 77.25V84.625H50.75V77.25H96.625ZM50.75 105.375V97.125H96.625V105.375H50.75Z"
            stroke="white"
            strokeWidth="2"
            id="tenth"
            className="thePaths"
            onAnimationEnd={handleAnimation}
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeAnimation;