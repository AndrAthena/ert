(this.webpackJsonpert=this.webpackJsonpert||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a.n(n),r=(a(100),a(101),a(9)),i=a(62),s=a(137),o=a(139),l=a(11),j=a(82),d=a(134),b=a(0),m=a(1),u=function(e){var t=e.href,a=e.children,n=e.button,c=e.buttonProps,i=Object(j.a)(e,["href","children","button","buttonProps"]),o=Object(r.f)(),b=function(e){e.preventDefault(),o.push(t||"/")};return n?Object(m.jsx)(s.a,Object(l.a)(Object(l.a)({href:t,onClick:b},c),{},{children:a})):Object(m.jsx)(d.a,Object(l.a)(Object(l.a)({},i),{},{href:t,onClick:b,children:a}))},h=a(76),x=function(e){var t=e.title,a=void 0===t?"":t,n=e.description,c=void 0===n?"":n;return Object(m.jsxs)(h.a,{children:[Object(m.jsxs)("title",{children:["ERT ",a&&"| ".concat(a)]}),Object(m.jsx)("meta",{name:"description",content:c})]})},O=a(154),f=a(85),p=function(e){return Object(m.jsx)(f.a,Object(l.a)(Object(l.a)({viewBox:"0 0 122.349 108.936"},e),{},{children:Object(m.jsxs)("g",{children:[Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{d:"M122.349,108.936h-27.3l-21.02-37.55,12.41-22.17Z",fill:"#84b123"}),Object(m.jsx)("path",{d:"M87.654,108.932,70.334,78l-17.32,30.935Z",fill:"#587720"})]}),Object(m.jsx)("path",{d:"M64.933,0,0,108.932H45.441L87.654,37.854Z",fill:"#84b123"})]})}))},g=a(138),v=Object(g.a)((function(e){return{auth:{padding:e.spacing(2)},imgContainer:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"80%",margin:"auto",border:"1px solid ".concat(e.palette.primary.main),borderRadius:40},formContainer:{width:"100%",maxWidth:420},logo:{fontSize:50,marginBottom:e.spacing(2)}}})),y=function(e){var t=e.title,a=e.description,n=e.children,c=e.className,r=e.illustration,s=e.alt,o=e.reverse,l=v();return Object(m.jsx)("div",{className:"".concat(l.auth," container h-100"),children:Object(m.jsxs)("div",{className:"row h-100 ".concat(o?"flex-row-reverse":""),children:[Object(m.jsx)("div",{className:"col-lg-6 d-lg-flex d-none",children:Object(m.jsx)("div",{className:"".concat(l.imgContainer," w-100 p-lg-5"),children:Object(m.jsx)("img",{src:r,alt:s,role:"presentation"})})}),Object(m.jsx)("div",{className:"col-lg-6 d-flex flex-column align-items-center justify-content-center",children:Object(m.jsxs)("div",{className:"".concat(l.formContainer," ").concat(c||""),children:[Object(m.jsxs)(O.a,{mb:2,textAlign:"center",children:[Object(m.jsx)(p,{className:l.logo}),Object(m.jsx)(i.a,{variant:"h3",color:"textPrimary",component:"h1",align:"center",gutterBottom:!0,children:t}),Object(m.jsx)(i.a,{align:"center",color:"textPrimary",gutterBottom:!0,children:a})]}),n]})})]})})},w=a.p+"static/media/email-sent.d245262f.svg",N=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"Resend e-mail"}),Object(m.jsxs)(y,{title:"Verification",description:"Check your e-mail box to reset your password. Follow the instructions send to your email box",className:"m-auto",illustration:w,alt:"Forgot Password",children:[Object(m.jsx)("div",{className:"my-4",children:Object(m.jsxs)(i.a,{align:"center",variant:"body2",children:["You haven't received an email?",Object(m.jsx)("br",{})," Check your spam or click on the button below"]})}),Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Resend email"}),Object(m.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(m.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(m.jsx)(u,{href:"/login",underline:"hover",children:"Sign in"})]})]})]})},S=a.p+"static/media/error.880610d0.svg",C=function(){return Object(m.jsx)(y,{title:"An error has occurred !",description:"There was an error resetting your password. Please try again later!",illustration:S,alt:"Success",children:Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign in"})})},k=a.p+"static/media/forgot-password.ec5da587.svg",P=a(153),A=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"Forgot your password"}),Object(m.jsx)(y,{title:"Password Recovery",description:"Enter your email address in the field below",className:"m-auto",illustration:k,alt:"Forgot Password",children:Object(m.jsxs)("form",{children:[Object(m.jsx)(P.a,{type:"email",label:"Email",variant:"outlined",required:!0,fullWidth:!0}),Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Reset Password"}),Object(m.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(m.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(m.jsx)(u,{href:"/login",underline:"hover",children:"Sign in"})]})]})})]})},F=a.p+"static/media/login.def83611.svg",W=a(79),T=a.n(W),B=Object(g.a)((function(e){return{btnGoogle:{textTransform:"initial",fontSize:"0.875rem",color:e.palette.background.paper,backgroundColor:"#d93025","&:hover":{backgroundColor:"#CE311B"}}}})),M=function(e){var t=B();return Object(m.jsx)(T.a,Object(l.a)(Object(l.a)({},e),{},{render:function(a){var n=a.onClick;return Object(m.jsx)(s.a,{onClick:n,variant:"contained",className:"".concat(t.btnGoogle," ").concat(e.className),color:"default",children:e.buttonText})}}))},E=a(80),z=a.n(E),L=Object(g.a)((function(e){return{btnFacebook:{color:e.palette.common.white,backgroundColor:"#1877F2",borderRadius:6,"&:hover":{backgroundColor:"#0052cc"}}}}));var R=function(e){var t=L();return Object(m.jsx)(z.a,Object(l.a)(Object(l.a)({},e),{},{typeButton:"button",render:function(a){var n=a.onClick;return Object(m.jsx)(s.a,{variant:"contained",onClick:n,color:"default",className:t.btnFacebook,children:e.textButton})}}))},I=Object({NODE_ENV:"production",PUBLIC_URL:"/ert",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).GOOGLE_API_CLIENT_ID||"409606656881-as0mpgvk8b77glmtp6fjegoeich7f22r.apps.googleusercontent.com",H=a(145),Z=a(156),V=a(54),D=a(141),_=a(142),q=a(143),G=a(144),K=function(e){var t=Object(b.useState)(!1),a=Object(V.a)(t,2),n=a[0],c=a[1];return Object(m.jsx)(P.a,Object(l.a)({type:n?"text":"password",label:"Password",variant:"outlined",InputProps:{endAdornment:Object(m.jsx)(D.a,{position:"end",children:Object(m.jsx)(_.a,{onClick:function(){return c((function(e){return!e}))},size:"small",children:n?Object(m.jsx)(q.a,{fontSize:"small"}):Object(m.jsx)(G.a,{fontSize:"small"})})})},required:!0,fullWidth:!0},e))},U=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"Login"}),Object(m.jsx)(y,{title:"Welcome to RTE",description:"Please login to your account",className:"m-auto",illustration:F,alt:"Login illustration",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"d-flex align-items-start mb-5",children:[Object(m.jsx)(M,{clientId:I,buttonText:"Login with Google",className:"mr-3"}),Object(m.jsx)(R,{appId:"1088597931155576",callback:function(){},textButton:"Login with Facebook"})]}),Object(m.jsx)(P.a,{type:"email",label:"Email",variant:"outlined",required:!0,fullWidth:!0}),Object(m.jsx)(K,{label:"Password"}),Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsx)(H.a,{control:Object(m.jsx)(Z.a,{color:"primary",className:"pr-2",size:"small"}),label:"Remember me",className:"mb-2"}),Object(m.jsx)(u,{href:"/forgot-password",className:"ml-auto mb-2",underline:"always",children:"Forgot Password ?"})]}),Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign in"}),Object(m.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(m.jsx)(u,{href:"/signup",button:!0,buttonProps:{variant:"outlined",fullWidth:!0,color:"primary"},children:"Sign up"})]})})]})},Y=a.p+"static/media/password-reset.3f2f9899.svg",J=a(140),Q=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"New Password"}),Object(m.jsx)(y,{title:"Reset",description:"Enter your new password",className:"m-auto",illustration:Y,alt:"Login illustration",children:Object(m.jsxs)("form",{children:[Object(m.jsx)(K,{label:"New password"}),Object(m.jsx)(K,{label:"Confirm new password"}),Object(m.jsxs)(J.a,{className:"mb-4",children:["Your password must:",Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:"- At least contain 8 characters"}),Object(m.jsx)("li",{children:"- Contain at least one capital letter, one special character, one number and a lowercase "}),Object(m.jsx)("li",{children:"- Do not contain your personal data"})]})]}),Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Reset password"}),Object(m.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(m.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(m.jsx)(u,{href:"/login",underline:"hover",children:"Sign in"})]})]})})]})},X=a.p+"static/media/signup.f99b2d1a.svg",$=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"Sign Up"}),Object(m.jsx)(y,{title:"Sign up to RTE",description:"Please login to your account",className:"m-auto",illustration:X,alt:"Signup illustration",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"d-flex align-items-start mb-5",children:[Object(m.jsx)(M,{clientId:I,buttonText:"Sign up with Google",className:"mr-3"}),Object(m.jsx)(R,{appId:"1088597931155576",callback:function(){},textButton:"Sign up with Facebook"})]}),Object(m.jsx)(P.a,{label:"Name",variant:"outlined",required:!0,fullWidth:!0}),Object(m.jsx)(P.a,{type:"email",label:"Email",variant:"outlined",required:!0,fullWidth:!0}),Object(m.jsx)(K,{label:"Password"}),Object(m.jsx)(K,{label:"Confirm Password"}),Object(m.jsx)(H.a,{control:Object(m.jsx)(Z.a,{color:"primary",className:"p-1 pr-2",size:"small"}),label:"I've read and agree with Terms of Service and our Privacy Policy",className:"align-items-start mb-3"}),Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign up"}),Object(m.jsx)(o.a,{variant:"fullWidth",className:"my-4"}),Object(m.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(m.jsx)(u,{href:"/login",underline:"hover",children:"Sign in"})]})]})})]})},ee=a.p+"static/media/success.b8535cfa.svg",te=function(){return Object(m.jsx)(y,{title:"Congratulation !",description:"Your password has been successfully created.",illustration:ee,alt:"Success",children:Object(m.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign in"})})},ae=a(146),ne=a(147),ce=Object(g.a)((function(e){return{menu:{"& a":{margin:e.spacing(0,2),color:e.palette.text.primary,transition:e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:.2}),"&:hover":{fontWeight:500}}}}})),re=function(){var e=ce();return Object(m.jsx)(ae.a,{position:"sticky",color:"transparent",elevation:1,children:Object(m.jsxs)(ne.a,{className:"container",disableGutters:!0,children:[Object(m.jsxs)("div",{className:"d-flex align-items-center mr-5",children:[Object(m.jsx)(p,{}),Object(m.jsx)(i.a,{className:"ml-2",color:"textPrimary",children:Object(m.jsx)("strong",{children:"RTE Technologies"})})]}),Object(m.jsxs)("nav",{className:e.menu,children:[Object(m.jsx)(u,{href:"/",underline:"none",children:"Home"}),Object(m.jsx)(u,{href:"/about",underline:"none",children:"About"}),Object(m.jsx)(u,{href:"/pricing",underline:"none",children:"Pricing"}),Object(m.jsx)(u,{href:"/template",underline:"none",children:"Template"}),Object(m.jsx)(u,{href:"/help",underline:"none",children:"Help"})]}),Object(m.jsxs)("div",{className:"ml-auto",children:[Object(m.jsx)(u,{href:"/login",button:!0,buttonProps:{variant:"outlined",color:"secondary",className:"mr-3"},children:"Sign in"}),Object(m.jsx)(u,{href:"/signup",button:!0,buttonProps:{variant:"contained",color:"secondary"},children:"Sign up"})]})]})})},ie=function(e){return Object(m.jsxs)(f.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 48.868 36.671",children:[Object(m.jsx)("path",{d:"M829.431,481.156V511.22c-.1.016-.1.107-.121.179a4.259,4.259,0,0,1-4.373,3.085c-4.372-.06-8.745-.018-13.118-.018q-13.524,0-27.048,0a4.038,4.038,0,0,1-4.2-4.058q-.02-14.264,0-28.527a3.765,3.765,0,0,1,.424-1.788,4.068,4.068,0,0,1,3.874-2.278q20.131.006,40.262,0c.159,0,.319,0,.477.009a4.113,4.113,0,0,1,2.856,1.426A6.364,6.364,0,0,1,829.431,481.156Zm-21.449,29.217h15.931a4.94,4.94,0,0,0,.524-.011.985.985,0,0,0,.162-1.934,2.239,2.239,0,0,0-.706-.07q-16,0-32,0a.78.78,0,0,1-.688-.294,1.885,1.885,0,0,0-2.972.031.675.675,0,0,1-.607.262c-.62-.011-1.241-.02-1.86,0a1.023,1.023,0,0,0-1.1,1.059,1.012,1.012,0,0,0,1.142.951c.588.006,1.177.016,1.765,0a.749.749,0,0,1,.681.311,1.88,1.88,0,0,0,2.935.017.82.82,0,0,1,.722-.328Q799.945,510.378,807.982,510.373Z",transform:"translate(-780.563 -477.813)"}),Object(m.jsx)("path",{d:"M12,7.5V23.181l12.321-7.841Z",transform:"translate(8 0.5)",fill:"#fff"})]}))},se=function(e){return Object(m.jsx)(f.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 45.078 50.805",children:Object(m.jsxs)("g",{transform:"translate(-1280.313 -535)",children:[Object(m.jsxs)("g",{transform:"translate(1280.313 535)",children:[Object(m.jsx)("rect",{width:"41.005",height:"11.222",transform:"translate(2.036 39.584)"}),Object(m.jsx)("rect",{width:"45.078",height:"19.238",transform:"translate(0 20.344)"}),Object(m.jsx)("path",{d:"M405.265,861.933v11.243H364.281V849.651h28.7v10.9c0,.658.127,1.039.509,1.209v.169Z",transform:"translate(-362.244 -849.651)"}),Object(m.jsx)("path",{d:"M387.35,858.968H378.8v-8.528Z",transform:"translate(-345.963 -848.766)"})]}),Object(m.jsxs)("g",{transform:"translate(0 -3.334)",children:[Object(m.jsx)("path",{d:"M.61.108C.5.2.435.427.219,1.492A11.685,11.685,0,0,0,0,2.8a4.585,4.585,0,0,0,.878.144,4.878,4.878,0,0,0,.144-.59,3.913,3.913,0,0,1,.144-.584,1.472,1.472,0,0,1,.211.439A7.177,7.177,0,0,1,.6,8.894a3.2,3.2,0,0,0-.277.457c.012.006.175.144.373.295l.349.283L1.151,9.8a8.883,8.883,0,0,0,1.54-3.448A11.061,11.061,0,0,0,2.728,3.46a12.02,12.02,0,0,0-.584-1.932c-.1-.211-.12-.325-.072-.325s.307.054.6.114a1.84,1.84,0,0,0,.548.072A3.883,3.883,0,0,0,3.36.505C3.324.463,1,0,.845,0A.475.475,0,0,0,.61.108Z",transform:"translate(1307.74 576.279) rotate(73)",fill:"#fff",stroke:"#fff","stroke-width":"0.1"}),Object(m.jsx)("path",{d:"M10.031,6.089a1.463,1.463,0,0,1-.283-.343,1.462,1.462,0,0,1,.283-.343l.283-.289H9.646A12.7,12.7,0,0,1,1.721,2.347,12.187,12.187,0,0,1,0,.638,1.343,1.343,0,0,1,.343.283L.692,0l.433.469a11.986,11.986,0,0,0,.933.9A11.758,11.758,0,0,0,9.634,4.152a2,2,0,0,0,.6-.048,1.193,1.193,0,0,0-.241-.283,1.068,1.068,0,0,1-.241-.289,2.867,2.867,0,0,1,.65-.644,10.961,10.961,0,0,1,.812.77c.674.68.764.8.764.975s-.09.295-.764.975a7.828,7.828,0,0,1-.83.77A1.414,1.414,0,0,1,10.031,6.089Z",transform:"matrix(-0.951, 0.309, -0.309, -0.951, 1308.757, 550.4)",fill:"#fff",stroke:"#fff","stroke-width":"0.1"}),Object(m.jsx)("path",{d:"M8.81.014C8.551.063,8.419.273,8.3.791c-.054.265-.138.662-.187.885l-.09.4L7.6,2.181l-.427.1-.211-.235C6.072,1.061,5.885.881,5.723.881a5.079,5.079,0,0,0-1.643.867c-.2.168-.175.367.132,1.3l.265.812-.307.313-.307.307-.277-.084c-.15-.042-.517-.162-.812-.265-.722-.241-.885-.241-1.107.036A5.779,5.779,0,0,0,.873,5.725c0,.168.168.343,1.167,1.246l.235.211-.1.427-.108.427-.4.09c-.223.048-.626.132-.9.193C.012,8.475,0,8.5,0,9.606s.012,1.131.77,1.288c.271.06.674.144.9.192l.4.09.108.427.1.427-.235.211c-.987.891-1.167,1.077-1.167,1.239A4.686,4.686,0,0,0,1.829,15.2c.187.1.367.072.945-.12.295-.1.662-.223.812-.265l.277-.084.307.307.307.313-.265.812c-.271.812-.307.987-.235,1.173a4.521,4.521,0,0,0,1.745.993c.162,0,.349-.18,1.24-1.167l.211-.235.427.1.427.108.09.4c.048.223.132.626.193.9.156.758.187.77,1.288.77s1.131-.012,1.288-.77c.06-.271.144-.674.193-.9l.09-.4.427-.108.427-.1.211.235c.9,1,1.077,1.167,1.246,1.167a5.432,5.432,0,0,0,1.577-.818c.259-.247.259-.355-.072-1.348l-.265-.812.307-.313.307-.307.277.084c.15.042.517.162.812.265.7.235.842.235,1.083-.018a5.432,5.432,0,0,0,.818-1.576c0-.181-.1-.295-.927-1.029l-.475-.427.108-.427a2.115,2.115,0,0,1,.126-.433c.012,0,.4-.084.879-.187,1.2-.259,1.161-.217,1.161-1.378s.036-1.119-1.161-1.378c-.475-.1-.867-.186-.879-.186a2.115,2.115,0,0,1-.126-.433l-.108-.427.475-.427c.812-.728.927-.854.927-1.023a5.16,5.16,0,0,0-.866-1.649c-.168-.192-.367-.168-1.3.138l-.812.265-.319-.313-.313-.313.271-.812c.331-.981.337-1.1.072-1.348A5.432,5.432,0,0,0,13.479.881c-.168,0-.343.168-1.246,1.167l-.211.235-.427-.1-.427-.108-.09-.4c-.048-.223-.132-.626-.193-.9C10.729.044,10.687.014,9.73,0,9.309,0,8.894,0,8.81.014Zm1.318,1.805a4.672,4.672,0,0,0,.289.993,1.1,1.1,0,0,0,.439.181c.187.036.548.132.812.217a1.976,1.976,0,0,0,.6.114,7.236,7.236,0,0,0,1.27-1.288c.06-.066.126-.054.379.072l.307.156-.144.463c-.084.259-.2.632-.271.824a2.4,2.4,0,0,0-.12.493,5.306,5.306,0,0,0,1.462,1.468,7.835,7.835,0,0,0,.957-.265l.824-.265.156.277a1.114,1.114,0,0,1,.138.319c-.012.024-.307.307-.668.626a4.117,4.117,0,0,0-.68.722,1.977,1.977,0,0,0,.114.608c.084.265.181.626.217.812a1.209,1.209,0,0,0,.174.439,5.25,5.25,0,0,0,.993.289l.885.192v.674l-.885.193a5.25,5.25,0,0,0-.993.289,1.209,1.209,0,0,0-.175.439c-.036.186-.132.548-.217.812a1.978,1.978,0,0,0-.114.6,7.239,7.239,0,0,0,1.288,1.27c.066.06.054.126-.072.379l-.15.3-.259-.078c-.144-.042-.517-.162-.836-.265a4.788,4.788,0,0,0-.7-.186,5.452,5.452,0,0,0-1.456,1.468,2.4,2.4,0,0,0,.12.493c.072.193.187.566.271.824l.144.463-.307.157c-.253.126-.319.138-.379.072a7.239,7.239,0,0,0-1.27-1.288,1.978,1.978,0,0,0-.6.114c-.265.084-.626.181-.812.217a1.209,1.209,0,0,0-.439.175,5.248,5.248,0,0,0-.289.993l-.193.885H9.261l-.193-.878a4.675,4.675,0,0,0-.289-.993,1.1,1.1,0,0,0-.439-.18c-.187-.036-.548-.132-.812-.217a1.977,1.977,0,0,0-.6-.114A7.2,7.2,0,0,0,5.65,17.181c-.06.066-.12.054-.373-.084l-.3-.162.144-.457c.078-.259.193-.626.265-.818a2.4,2.4,0,0,0,.12-.493A5.452,5.452,0,0,0,4.05,13.7a14.463,14.463,0,0,0-1.619.475c-.15.054-.175.036-.325-.247-.138-.253-.15-.313-.084-.373a7.777,7.777,0,0,0,1.294-1.27,1.977,1.977,0,0,0-.114-.608c-.084-.265-.181-.626-.217-.812a1.1,1.1,0,0,0-.181-.439,4.016,4.016,0,0,0-.993-.289L.933,9.943V9.269l.879-.193A4.018,4.018,0,0,0,2.8,8.787a1.1,1.1,0,0,0,.181-.439c.036-.186.132-.548.217-.812a2.006,2.006,0,0,0,.114-.608,3.718,3.718,0,0,0-.68-.722c-.361-.325-.656-.608-.668-.626a1.114,1.114,0,0,1,.138-.319l.156-.277.463.144c.253.078.626.193.818.265a2.406,2.406,0,0,0,.493.12A5.17,5.17,0,0,0,5.506,4.046a2.4,2.4,0,0,0-.12-.493c-.072-.193-.187-.566-.265-.818l-.144-.463.277-.157a1.116,1.116,0,0,1,.319-.138c.024.012.307.307.626.668a4.113,4.113,0,0,0,.722.68,1.976,1.976,0,0,0,.608-.114c.265-.084.626-.181.812-.217a1.1,1.1,0,0,0,.439-.181,4.674,4.674,0,0,0,.289-.993L9.261.941h.674Z",transform:"matrix(0.951, 0.309, -0.309, 0.951, 1295.899, 550.867)",fill:"#fff",stroke:"#fff","stroke-width":"0.1"}),Object(m.jsxs)("g",{transform:"translate(1297 558)",fill:"#fff",stroke:"#fff","stroke-width":"1",children:[Object(m.jsx)("circle",{cx:"5",cy:"5",r:"5",stroke:"none"}),Object(m.jsx)("circle",{cx:"5",cy:"5",r:"4.5",fill:"none"})]})]})]})}))},oe=function(e){return Object(m.jsx)(f.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 46.078 50.805",children:Object(m.jsx)("g",{transform:"translate(-1279.813 -535)",children:Object(m.jsxs)("g",{transform:"translate(1280.313 535)",children:[Object(m.jsx)("rect",{width:"41.005",height:"11.222",transform:"translate(2.036 39.584)"}),Object(m.jsx)("path",{d:"M405.265,861.933v11.243H364.281V849.651h28.7v10.9c0,.658.127,1.039.509,1.209v.169Z",transform:"translate(-362.244 -849.651)"}),Object(m.jsx)("path",{d:"M387.35,858.968H378.8v-8.528Z",transform:"translate(-345.963 -848.766)"}),Object(m.jsx)("rect",{width:"45.078",height:"19.238",transform:"translate(0 20.344)",stroke:"#fff","stroke-width":"1"})]})})}))},le=function(e){return Object(m.jsx)(f.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 45.53 45.523",children:Object(m.jsxs)("g",{id:"pie-chart",transform:"translate(0)",children:[Object(m.jsx)("path",{d:"M35.4,65.025a1.626,1.626,0,0,1-1.485-.961A22.762,22.762,0,0,1,54.7,32a1.626,1.626,0,0,1,1.626,1.626V54.762a1.626,1.626,0,0,1-.963,1.485l-19.3,8.632A1.618,1.618,0,0,1,35.4,65.025Z",transform:"translate(-31.931 -32)"}),Object(m.jsx)("path",{d:"M120.258,68.037a.813.813,0,0,0-.974.795V87.122a4.885,4.885,0,0,1-2.886,4.453L98.873,99.417a.813.813,0,0,0-.34,1.2,21.179,21.179,0,0,0,4.924,5.122,21.138,21.138,0,1,0,16.8-37.7Z",transform:"translate(-91.638 -64.36)"})]})}))},je=function(e){return Object(m.jsxs)(f.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 45 45.525",children:[Object(m.jsx)("path",{d:"M0,0H12.2a0,0,0,0,1,0,0V31.2a0,0,0,0,1,0,0H2.372A2.372,2.372,0,0,1,0,28.826V0A0,0,0,0,1,0,0Z",transform:"translate(0 14.327)"}),Object(m.jsx)("path",{d:"M0,0H28.509a0,0,0,0,1,0,0V29.259A1.939,1.939,0,0,1,26.57,31.2H2.372A2.372,2.372,0,0,1,0,28.826V0A0,0,0,0,1,0,0Z",transform:"translate(16.436 14.327)"}),Object(m.jsx)("path",{d:"M1.177,0H43.823A1.177,1.177,0,0,1,45,1.177v8.955a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.177A1.177,1.177,0,0,1,1.177,0Z"})]}))},de=a(148),be=a(149),me=Object(g.a)((function(e){return{templateCard:{width:160,height:160,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(1.5),color:"#628E25",backgroundColor:"#F9F9F9 ",border:"1px solid transparent",borderRadius:16,transition:"all ease 0.2s","& svg":{fontSize:45,marginBottom:e.spacing(1)},"&:hover, &:focus":{color:e.palette.primary.main,borderColor:e.palette.primary.main,boxShadow:"0 0 26px #14141410"}}}})),ue=function(e){var t=e.icon,a=e.title,n=e.className,c=me();return Object(m.jsx)(de.a,{elevation:0,className:"".concat(null!==n&&void 0!==n?n:""," p-3 text-center"),children:Object(m.jsxs)(be.a,{className:c.templateCard,children:[t,Object(m.jsx)(i.a,{variant:"body2",align:"center",children:a})]})})},he=Object(g.a)((function(e){return{create:{height:"calc(100% - 64px)"}}})),xe=function(){var e=he();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(re,{}),Object(m.jsx)("div",{className:"".concat(e.create," container"),children:Object(m.jsxs)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center",children:[Object(m.jsx)(i.a,{align:"center",variant:"h1",gutterBottom:!0,children:"Hello Barry !"}),Object(m.jsx)(i.a,{align:"center",color:"textSecondary",children:"Quickly create your campaign ad. Browse the templates, the ads already created and your feeds"}),Object(m.jsxs)("div",{className:"d-flex align-items-center my-5",children:[Object(m.jsx)(ue,{className:"mx-4",icon:Object(m.jsx)(le,{}),title:"New Creative Template"}),Object(m.jsx)(ue,{className:"mx-4",icon:Object(m.jsx)(je,{}),title:"Creative Templates Library"}),Object(m.jsx)(ue,{className:"mx-4",icon:Object(m.jsx)(ie,{}),title:"Ads Creatives"}),Object(m.jsx)(ue,{className:"mx-4",icon:Object(m.jsx)(se,{}),title:"Automated Creatives"}),Object(m.jsx)(ue,{className:"mx-4",icon:Object(m.jsx)(oe,{}),title:"Feed Editor"})]})]})})]})},Oe=a.p+"static/media/spash-top-bg.497a0771.svg",fe=a.p+"static/media/spash-btm-bg.0b873f03.svg",pe=Object(g.a)((function(e){return{splash:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(1),backgroundImage:"url(".concat(Oe,"), url(").concat(fe,")"),backgroundPosition:"top left, bottom right",backgroundSize:"50%, 50%",backgroundRepeat:"no-repeat","& h1":{fontWeight:500},"& span":{fontWeight:600},"& svg":{fontSize:120,marginBottom:"1rem"},"@media(max-width: 359px)":{padding:e.spacing(2)}}}})),ge=a(157),ve=a(150),ye=function(){var e=pe(),t=localStorage.getItem("visited"),a=Object(b.useState)(Boolean(t)),n=Object(V.a)(a,2),c=n[0],r=n[1],o=function(){r((function(e){return!e})),localStorage.setItem("visited","true")};return Object(m.jsx)(ge.a,{open:!c,onClose:o,TransitionComponent:ve.a,transitionDuration:{exit:500},fullScreen:!0,fullWidth:!0,children:Object(m.jsxs)("div",{className:e.splash,children:[Object(m.jsx)(p,{}),Object(m.jsxs)(i.a,{variant:"h1",color:"textPrimary",align:"center",gutterBottom:!0,children:["Welcome to ",Object(m.jsx)("span",{children:"RTE"})]}),Object(m.jsx)(i.a,{color:"textPrimary",align:"center",gutterBottom:!0,children:"Create your ads fastly and efficiently."}),Object(m.jsx)(s.a,{variant:"outlined",color:"primary",onClick:o,children:"Get Started"})]})})},we=a.p+"static/media/hero.e13bcc66.svg",Ne=Object(g.a)((function(e){return{hero:{padding:e.spacing(5,0)}}})),Se=a.p+"static/media/brand-1.53d8a353.svg",Ce=a.p+"static/media/brand-2.888aa1db.svg",ke=a.p+"static/media/brand-3.110666d0.svg",Pe=a.p+"static/media/brand-4.444f17d8.svg",Ae=a.p+"static/media/brand-5.b1f79cb4.svg",Fe=function(){var e=Ne();return Object(m.jsx)("div",{className:e.hero,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6 mt-5",children:[Object(m.jsxs)(i.a,{variant:"h1",color:"textPrimary",className:"mb-3",children:["Create your ads easily ",Object(m.jsx)("br",{}),"and convert more customers"]}),Object(m.jsx)(i.a,{color:"textSecondary",className:"mb-4",variant:"h6",children:"RTE Technologies is a platform where you can create ads images or video easily that empowers your brands and marketing strategy."}),Object(m.jsx)(u,{button:!0,buttonProps:{variant:"contained",color:"secondary"},children:"Create your first design"})]}),Object(m.jsx)("div",{className:"col-md-6 text-right",children:Object(m.jsx)("img",{src:we,alt:""})})]}),Object(m.jsxs)("div",{className:"mt-5",children:[Object(m.jsx)(i.a,{align:"center",children:"Trusted by world's most innovative global brands and agencies"}),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center my-4",children:[Object(m.jsx)("img",{src:Se,className:"mx-5",alt:""}),Object(m.jsx)("img",{src:Ce,className:"mx-5",alt:""}),Object(m.jsx)("img",{src:ke,className:"mx-5",alt:""}),Object(m.jsx)("img",{src:Pe,className:"mx-5",alt:""}),Object(m.jsx)("img",{src:Ae,className:"mx-5",alt:""})]})]})]})})},We=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"Bienvenue sur ERT"}),Object(m.jsx)(ye,{}),Object(m.jsx)(re,{}),Object(m.jsx)("div",{children:Object(m.jsx)(Fe,{})})]})},Te=a.p+"static/media/404.21ac0a0e.svg",Be=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{title:"Not Found"}),Object(m.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(m.jsx)("img",{src:Te,alt:"Not Found"})})]})};var Me=function(){return Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/",component:We}),Object(m.jsx)(r.a,{path:"/login",component:U}),Object(m.jsx)(r.a,{path:"/signup",component:$}),Object(m.jsx)(r.a,{path:"/forgot-password",component:A}),Object(m.jsx)(r.a,{path:"/new-password",component:Q,exact:!0}),Object(m.jsx)(r.a,{path:"/new-password/success",component:te}),Object(m.jsx)(r.a,{path:"/new-password/error",component:C}),Object(m.jsx)(r.a,{path:"/email-sent",component:N}),Object(m.jsx)(r.a,{path:"/create-template",component:xe}),Object(m.jsx)(r.a,{path:"*",component:Be})]})},Ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,159)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},ze=a(152),Le=a(151),Re=a(81),Ie=Object(Re.a)({typography:{fontFamily:"'Poppins', sans-serif",fontSize:16,htmlFontSize:16,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,h1:{fontSize:"2rem",fontWeight:600,"@media(min-width: 1281px)":{fontSize:"3rem"}},h2:{fontSize:"1.875rem",fontWeight:600,"@media(min-width: 1281px)":{fontSize:"2rem"}},h3:{fontSize:"1.5rem",fontWeight:600},body1:{fontSize:"1rem"},body2:{fontSize:"0.875rem"}},palette:{text:{primary:"#021D31"},primary:{main:"#86C232",dark:"#61892F"},secondary:{main:"#36558F"},common:{white:"#fff"},background:{paper:"#fff"}},overrides:{MuiTypography:{root:{fontFamily:"'Poppins', sans-serif"},gutterBottom:{marginBottom:".5rem"}},MuiButton:{outlined:{padding:"0.5rem 1.5rem",fontSize:".875rem",textTransform:"initial"},contained:{padding:"0.5rem 1.5rem",fontSize:".875rem",textTransform:"initial",whiteSpace:"nowrap"},containedPrimary:{color:"white"}},MuiInputBase:{root:{marginBottom:0}},MuiTextField:{root:{marginBottom:"1.25rem"}},MuiOutlinedInput:{input:{padding:"11.5px 14px",fontSize:".875rem"}},MuiInputLabel:{outlined:{fontSize:".875rem",transform:"translate(14px, 13px) scale(1)"}},MuiFormControlLabel:{label:{fontSize:"0.875rem"}},MuiLink:{root:{color:"#FF725E"}},MuiPaper:{elevation1:{boxShadow:"0 0 3px rgba(0, 0, 0, .25)"}}}}),He=a(58);c.a.render(Object(m.jsxs)(He.a,{basename:"/",children:[Object(m.jsx)(Le.a,{}),Object(m.jsx)(ze.a,{theme:Ie,children:Object(m.jsx)(Me,{})})]}),document.getElementById("root")),Ee()}},[[108,1,2]]]);
//# sourceMappingURL=main.4131101e.chunk.js.map