(this.webpackJsonpert=this.webpackJsonpert||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),r=(a(104),a(105),a(11)),i=a(69),s=a(142),o=a(145),l=a(8),j=a(40),d=a(139),b=a(143),m=a(0),h=a(1),x=function(e){var t=e.href,a=e.children,n=e.button,c=e.buttonProps,i=e.iconButton,o=e.iconButtonProps,m=Object(j.a)(e,["href","children","button","buttonProps","iconButton","iconButtonProps"]),x=Object(r.f)(),u=function(e){e.preventDefault(),x.push(t||"/")};return i?Object(h.jsx)(d.a,Object(l.a)(Object(l.a)({onClick:u},o),{},{children:a})):n?Object(h.jsx)(s.a,Object(l.a)(Object(l.a)({href:t,onClick:u},c),{},{children:a})):Object(h.jsx)(b.a,Object(l.a)(Object(l.a)({},m),{},{href:t,onClick:u,children:a}))},u=a(81),O=function(e){var t=e.title,a=void 0===t?"":t,n=e.description,c=void 0===n?"":n;return Object(h.jsxs)(u.a,{children:[Object(h.jsxs)("title",{children:["ERT ",a&&"| ".concat(a)]}),Object(h.jsx)("meta",{name:"description",content:c})]})},f=a(164),p=a(89),g=function(e){return Object(h.jsx)(p.a,Object(l.a)(Object(l.a)({viewBox:"0 0 122.349 108.936"},e),{},{children:Object(h.jsxs)("g",{children:[Object(h.jsxs)("g",{children:[Object(h.jsx)("path",{d:"M122.349,108.936h-27.3l-21.02-37.55,12.41-22.17Z",fill:"#84b123"}),Object(h.jsx)("path",{d:"M87.654,108.932,70.334,78l-17.32,30.935Z",fill:"#587720"})]}),Object(h.jsx)("path",{d:"M64.933,0,0,108.932H45.441L87.654,37.854Z",fill:"#84b123"})]})}))},v=a(144),y=Object(v.a)((function(e){return{auth:{padding:e.spacing(2)},imgContainer:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"80%",margin:"auto",border:"1px solid ".concat(e.palette.primary.main),borderRadius:40},formContainer:{width:"100%",maxWidth:420},logo:{fontSize:50,marginBottom:e.spacing(2)}}})),w=function(e){var t=e.title,a=e.description,n=e.children,c=e.className,r=e.illustration,s=e.alt,o=e.reverse,l=y();return Object(h.jsx)("div",{className:"".concat(l.auth," container h-100"),children:Object(h.jsxs)("div",{className:"row h-100 ".concat(o?"flex-row-reverse":""),children:[Object(h.jsx)("div",{className:"col-lg-6 d-lg-flex d-none",children:Object(h.jsx)("div",{className:"".concat(l.imgContainer," w-100 p-lg-5"),children:Object(h.jsx)("img",{src:r,alt:s,role:"presentation"})})}),Object(h.jsx)("div",{className:"col-lg-6 d-flex flex-column align-items-center justify-content-center",children:Object(h.jsxs)("div",{className:"".concat(l.formContainer," ").concat(c||""),children:[Object(h.jsxs)(f.a,{mb:2,textAlign:"center",children:[Object(h.jsx)(g,{className:l.logo}),Object(h.jsx)(i.a,{variant:"h3",color:"textPrimary",component:"h1",align:"center",gutterBottom:!0,children:t}),Object(h.jsx)(i.a,{align:"center",color:"textPrimary",gutterBottom:!0,children:a})]}),n]})})]})})},N=a.p+"static/media/email-sent.d245262f.svg",C=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Resend e-mail"}),Object(h.jsxs)(w,{title:"Verification",description:"Check your e-mail box to reset your password. Follow the instructions send to your email box",className:"m-auto",illustration:N,alt:"Forgot Password",children:[Object(h.jsx)("div",{className:"my-4",children:Object(h.jsxs)(i.a,{align:"center",variant:"body2",children:["You haven't received an email?",Object(h.jsx)("br",{})," Check your spam or click on the button below"]})}),Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Resend email"}),Object(h.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(h.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(h.jsx)(x,{href:"/login",underline:"hover",children:"Sign in"})]})]})]})},S=a.p+"static/media/error.880610d0.svg",k=function(){return Object(h.jsx)(w,{title:"An error has occurred !",description:"There was an error resetting your password. Please try again later!",illustration:S,alt:"Success",children:Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign in"})})},P=a.p+"static/media/forgot-password.ec5da587.svg",F=a(163),B=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Forgot your password"}),Object(h.jsx)(w,{title:"Password Recovery",description:"Enter your email address in the field below",className:"m-auto",illustration:P,alt:"Forgot Password",children:Object(h.jsxs)("form",{children:[Object(h.jsx)(F.a,{type:"email",label:"Email",variant:"outlined",required:!0,fullWidth:!0}),Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Reset Password"}),Object(h.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(h.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(h.jsx)(x,{href:"/login",underline:"hover",children:"Sign in"})]})]})})]})},W=a.p+"static/media/login.def83611.svg",A=a(84),T=a.n(A),z=Object(v.a)((function(e){return{btnGoogle:{textTransform:"initial",fontSize:"0.875rem",color:e.palette.background.paper,backgroundColor:"#d93025","&:hover":{backgroundColor:"#CE311B"}}}})),M=function(e){var t=z();return Object(h.jsx)(T.a,Object(l.a)(Object(l.a)({},e),{},{render:function(a){var n=a.onClick;return Object(h.jsx)(s.a,{onClick:n,variant:"contained",className:"".concat(t.btnGoogle," ").concat(e.className),color:"default",children:e.buttonText})}}))},H=a(85),E=a.n(H),V=Object(v.a)((function(e){return{btnFacebook:{color:e.palette.common.white,backgroundColor:"#1877F2",borderRadius:6,"&:hover":{backgroundColor:"#0052cc"}}}}));var I=function(e){var t=V();return Object(h.jsx)(E.a,Object(l.a)(Object(l.a)({},e),{},{typeButton:"button",render:function(a){var n=a.onClick;return Object(h.jsx)(s.a,{variant:"contained",onClick:n,color:"default",className:t.btnFacebook,children:e.textButton})}}))},R=Object({NODE_ENV:"production",PUBLIC_URL:"/ert",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).GOOGLE_API_CLIENT_ID||"409606656881-as0mpgvk8b77glmtp6fjegoeich7f22r.apps.googleusercontent.com",L=a(150),Z=a(166),D=a(39),q=a(147),_=a(148),G=a(149),Q=function(e){var t=Object(m.useState)(!1),a=Object(D.a)(t,2),n=a[0],c=a[1];return Object(h.jsx)(F.a,Object(l.a)({type:n?"text":"password",label:"Password",variant:"outlined",InputProps:{endAdornment:Object(h.jsx)(q.a,{position:"end",children:Object(h.jsx)(d.a,{onClick:function(){return c((function(e){return!e}))},size:"small",children:n?Object(h.jsx)(_.a,{fontSize:"small"}):Object(h.jsx)(G.a,{fontSize:"small"})})})},required:!0,fullWidth:!0},e))},Y=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Login"}),Object(h.jsx)(w,{title:"Welcome to RTE",description:"Please login to your account",className:"m-auto",illustration:W,alt:"Login illustration",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"d-flex align-items-start mb-5",children:[Object(h.jsx)(M,{clientId:R,buttonText:"Login with Google",className:"mr-3"}),Object(h.jsx)(I,{appId:"1088597931155576",callback:function(){},textButton:"Login with Facebook"})]}),Object(h.jsx)(F.a,{type:"email",label:"Email",variant:"outlined",required:!0,fullWidth:!0}),Object(h.jsx)(Q,{label:"Password"}),Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(L.a,{control:Object(h.jsx)(Z.a,{color:"primary",className:"pr-2",size:"small"}),label:"Remember me",className:"mb-2"}),Object(h.jsx)(x,{href:"/forgot-password",className:"ml-auto mb-2",underline:"always",children:"Forgot Password ?"})]}),Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign in"}),Object(h.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(h.jsx)(x,{href:"/signup",button:!0,buttonProps:{variant:"outlined",fullWidth:!0,color:"primary"},children:"Sign up"})]})})]})},K=a.p+"static/media/password-reset.3f2f9899.svg",U=a(146),J=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"New Password"}),Object(h.jsx)(w,{title:"Reset",description:"Enter your new password",className:"m-auto",illustration:K,alt:"Login illustration",children:Object(h.jsxs)("form",{children:[Object(h.jsx)(Q,{label:"New password"}),Object(h.jsx)(Q,{label:"Confirm new password"}),Object(h.jsxs)(U.a,{className:"mb-4",children:["Your password must:",Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsx)("li",{children:"- At least contain 8 characters"}),Object(h.jsx)("li",{children:"- Contain at least one capital letter, one special character, one number and a lowercase "}),Object(h.jsx)("li",{children:"- Do not contain your personal data"})]})]}),Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Reset password"}),Object(h.jsx)(o.a,{variant:"fullWidth",className:"mt-5 mb-4"}),Object(h.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(h.jsx)(x,{href:"/login",underline:"hover",children:"Sign in"})]})]})})]})},X=a.p+"static/media/signup.f99b2d1a.svg",$=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Sign Up"}),Object(h.jsx)(w,{title:"Sign up to RTE",description:"Please login to your account",className:"m-auto",illustration:X,alt:"Signup illustration",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"d-flex align-items-start mb-5",children:[Object(h.jsx)(M,{clientId:R,buttonText:"Sign up with Google",className:"mr-3"}),Object(h.jsx)(I,{appId:"1088597931155576",callback:function(){},textButton:"Sign up with Facebook"})]}),Object(h.jsx)(F.a,{label:"Name",variant:"outlined",required:!0,fullWidth:!0}),Object(h.jsx)(F.a,{type:"email",label:"Email",variant:"outlined",required:!0,fullWidth:!0}),Object(h.jsx)(Q,{label:"Password"}),Object(h.jsx)(Q,{label:"Confirm Password"}),Object(h.jsx)(L.a,{control:Object(h.jsx)(Z.a,{color:"primary",className:"p-1 pr-2",size:"small"}),label:"I've read and agree with Terms of Service and our Privacy Policy",className:"align-items-start mb-3"}),Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign up"}),Object(h.jsx)(o.a,{variant:"fullWidth",className:"my-4"}),Object(h.jsxs)(i.a,{variant:"body2",children:["Already have an account ?"," ",Object(h.jsx)(x,{href:"/login",underline:"hover",children:"Sign in"})]})]})})]})},ee=a.p+"static/media/success.b8535cfa.svg",te=function(){return Object(h.jsx)(w,{title:"Congratulation !",description:"Your password has been successfully created.",illustration:ee,alt:"Success",children:Object(h.jsx)(s.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Sign in"})})},ae=a(151),ne=a(152),ce=a(167),re=Object(v.a)((function(e){return{menu:{"& a":{margin:e.spacing(0,2),color:e.palette.text.primary,transition:e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:.2}),"&:hover":{fontWeight:500}}}}})),ie=function(e){var t=re();return Object(h.jsx)(ae.a,Object(l.a)(Object(l.a)({position:"sticky",color:"inherit",elevation:1},e),{},{children:Object(h.jsxs)(ne.a,{className:"container",disableGutters:!0,children:[Object(h.jsxs)(x,{className:"d-flex align-items-center mr-5",href:"/",color:"initial",underline:"none",children:[Object(h.jsx)(g,{}),Object(h.jsx)(i.a,{className:"ml-2",color:"textPrimary",children:Object(h.jsx)("strong",{children:"RTE Technologies"})})]}),Object(h.jsxs)("nav",{className:t.menu,children:[Object(h.jsx)(x,{href:"/",underline:"none",children:"Home"}),Object(h.jsx)(x,{href:"/about",underline:"none",children:"About"}),Object(h.jsx)(x,{href:"/pricing",underline:"none",children:"Pricing"}),Object(h.jsx)(x,{href:"/template",underline:"none",children:"Template"}),Object(h.jsx)(x,{href:"/help",underline:"none",children:"Help"})]}),Object(h.jsxs)("div",{className:"d-flex ml-auto",children:[Object(h.jsx)(x,{href:"/login",button:!0,buttonProps:{variant:"outlined",color:"secondary",className:"mr-3"},children:"Sign in"}),Object(h.jsx)(x,{href:"/signup",button:!0,buttonProps:{variant:"contained",color:"secondary"},children:"Sign up"}),Object(h.jsx)(ce.a,{className:"ml-3",children:"B"})]})]})}))},se=a(154),oe=a(153),le=function(e){var t=e.active,a=t/e.stepNumber*100;return Object(h.jsxs)(ae.a,{color:"inherit",elevation:0,position:"relative",component:"div",classes:{root:"mb-5"},children:[Object(h.jsxs)(ne.a,{classes:{root:"container"},disableGutters:!0,children:[Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(x,{style:{color:"inherit"},href:"/create-template",children:Object(h.jsx)(oe.a,{})}),Object(h.jsxs)("div",{className:"ml-2",children:[Object(h.jsx)(i.a,{color:"textPrimary",children:Object(h.jsx)("strong",{children:"New template"})}),Object(h.jsx)(i.a,{variant:"body2",color:"textSecondary",children:"Create a new template quickly"})]})]}),Object(h.jsx)("div",{className:"flex-grow-1",children:Object(h.jsxs)(i.a,{color:"textPrimary",align:"center",children:["Step ",t,"/3"]})})]}),Object(h.jsx)(se.a,{variant:"determinate",value:a,style:{width:"100%",position:"absolute",bottom:0}})]})},je=a(155),de=a(170),be=function(e){return Object(h.jsx)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 48 39.194",children:Object(h.jsx)("g",{transform:"translate(-14.667 -8.245)",children:Object(h.jsxs)("g",{transform:"translate(14.667 8.245)",children:[Object(h.jsx)("path",{d:"M9.667,21.563a2.428,2.428,0,0,1,1.644-1.629,2.77,2.77,0,0,1,.694-.061q7.263,0,14.526-.008a.614.614,0,0,1,.57.3c1.15,1.631,2.325,3.246,3.466,4.883a.893.893,0,0,0,.845.419q9.441-.018,18.883-.01a2.57,2.57,0,0,1,1.754.505,2.142,2.142,0,0,1,.811,1.67c.016,1.577,0,3.156.013,4.733,0,.283-.1.334-.355.332-1.171-.01-2.343,0-3.514,0q-14.386,0-28.771,0a2.11,2.11,0,0,0-2.42,1.657Q13.877,44.59,9.925,54.826c-.039.1.013.363-.258.29Z",transform:"translate(-9.667 -19.864)"}),Object(h.jsx)("path",{d:"M39.175,34.213q9,0,17.992-.009c.382,0,.531.076.49.479a2.946,2.946,0,0,1-.126.729Q53.513,46.468,49.5,57.525a2.017,2.017,0,0,1-2.108,1.5q-17.759,0-35.517,0c-.57,0-.59-.047-.62-.62a4.26,4.26,0,0,1,.343-1.854q4.362-10.827,8.678-21.672a.923.923,0,0,1,1-.68C27.242,34.22,33.208,34.213,39.175,34.213Z",transform:"translate(-9.664 -19.834)"})]})})}))},me=function(){return Object(h.jsxs)("div",{className:"mx-auto",children:[Object(h.jsx)(i.a,{variant:"subtitle1",color:"textPrimary",children:"Configure the structure of your template folder"}),Object(h.jsx)(i.a,{color:"textSecondary",children:"Choose the number of sub-folder and where to put your ads "}),Object(h.jsxs)("form",{className:"mt-4",children:[Object(h.jsx)(F.a,{type:"number",variant:"outlined",label:"Number of sub-folder",inputProps:{min:0},fullWidth:!0}),Object(h.jsxs)(F.a,{variant:"outlined",label:"Where to put your ads ?",select:!0,SelectProps:{native:!0},fullWidth:!0,children:[Object(h.jsx)("option",{children:"Sub-Folder 1"}),Object(h.jsx)("option",{children:"Sub-Folder 2"}),Object(h.jsx)("option",{children:"Sub-Folder 3"})]})]}),Object(h.jsxs)(je.a,{children:[Object(h.jsx)(de.a,{label:"Folder",icon:Object(h.jsx)(be,{fontSize:"large",color:"primary"}),nodeId:"root-folder-1"}),Object(h.jsx)(de.a,{label:"Folder",nodeId:"root-folder-2"})]})]})},he=function(e){switch(e){case 1:return Object(h.jsx)(me,{})}},xe=function(){var e=Object(m.useState)(1),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(ie,{elevation:0}),Object(h.jsx)(le,{active:a,stepNumber:3}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:he(a)}),Object(h.jsxs)("div",{className:"mx-auto text-center",children:[1!==a&&Object(h.jsx)(s.a,{variant:"outlined",color:"secondary",classes:{root:"mr-2"},onClick:function(){return n((function(e){return e-1}))},children:"Back"}),3!==a&&Object(h.jsx)(s.a,{variant:"contained",color:"secondary",onClick:function(){return n((function(e){return e+1}))},children:"Continue"})]})]})]})},ue=function(e){return Object(h.jsxs)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 48.868 36.671",children:[Object(h.jsx)("path",{d:"M829.431,481.156V511.22c-.1.016-.1.107-.121.179a4.259,4.259,0,0,1-4.373,3.085c-4.372-.06-8.745-.018-13.118-.018q-13.524,0-27.048,0a4.038,4.038,0,0,1-4.2-4.058q-.02-14.264,0-28.527a3.765,3.765,0,0,1,.424-1.788,4.068,4.068,0,0,1,3.874-2.278q20.131.006,40.262,0c.159,0,.319,0,.477.009a4.113,4.113,0,0,1,2.856,1.426A6.364,6.364,0,0,1,829.431,481.156Zm-21.449,29.217h15.931a4.94,4.94,0,0,0,.524-.011.985.985,0,0,0,.162-1.934,2.239,2.239,0,0,0-.706-.07q-16,0-32,0a.78.78,0,0,1-.688-.294,1.885,1.885,0,0,0-2.972.031.675.675,0,0,1-.607.262c-.62-.011-1.241-.02-1.86,0a1.023,1.023,0,0,0-1.1,1.059,1.012,1.012,0,0,0,1.142.951c.588.006,1.177.016,1.765,0a.749.749,0,0,1,.681.311,1.88,1.88,0,0,0,2.935.017.82.82,0,0,1,.722-.328Q799.945,510.378,807.982,510.373Z",transform:"translate(-780.563 -477.813)"}),Object(h.jsx)("path",{d:"M12,7.5V23.181l12.321-7.841Z",transform:"translate(8 0.5)",fill:"#fff"})]}))},Oe=function(e){return Object(h.jsx)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 45.078 50.805",children:Object(h.jsxs)("g",{transform:"translate(-1280.313 -535)",children:[Object(h.jsxs)("g",{transform:"translate(1280.313 535)",children:[Object(h.jsx)("rect",{width:"41.005",height:"11.222",transform:"translate(2.036 39.584)"}),Object(h.jsx)("rect",{width:"45.078",height:"19.238",transform:"translate(0 20.344)"}),Object(h.jsx)("path",{d:"M405.265,861.933v11.243H364.281V849.651h28.7v10.9c0,.658.127,1.039.509,1.209v.169Z",transform:"translate(-362.244 -849.651)"}),Object(h.jsx)("path",{d:"M387.35,858.968H378.8v-8.528Z",transform:"translate(-345.963 -848.766)"})]}),Object(h.jsxs)("g",{transform:"translate(0 -3.334)",children:[Object(h.jsx)("path",{d:"M.61.108C.5.2.435.427.219,1.492A11.685,11.685,0,0,0,0,2.8a4.585,4.585,0,0,0,.878.144,4.878,4.878,0,0,0,.144-.59,3.913,3.913,0,0,1,.144-.584,1.472,1.472,0,0,1,.211.439A7.177,7.177,0,0,1,.6,8.894a3.2,3.2,0,0,0-.277.457c.012.006.175.144.373.295l.349.283L1.151,9.8a8.883,8.883,0,0,0,1.54-3.448A11.061,11.061,0,0,0,2.728,3.46a12.02,12.02,0,0,0-.584-1.932c-.1-.211-.12-.325-.072-.325s.307.054.6.114a1.84,1.84,0,0,0,.548.072A3.883,3.883,0,0,0,3.36.505C3.324.463,1,0,.845,0A.475.475,0,0,0,.61.108Z",transform:"translate(1307.74 576.279) rotate(73)",fill:"#fff",stroke:"#fff",strokeWidth:"0.1"}),Object(h.jsx)("path",{d:"M10.031,6.089a1.463,1.463,0,0,1-.283-.343,1.462,1.462,0,0,1,.283-.343l.283-.289H9.646A12.7,12.7,0,0,1,1.721,2.347,12.187,12.187,0,0,1,0,.638,1.343,1.343,0,0,1,.343.283L.692,0l.433.469a11.986,11.986,0,0,0,.933.9A11.758,11.758,0,0,0,9.634,4.152a2,2,0,0,0,.6-.048,1.193,1.193,0,0,0-.241-.283,1.068,1.068,0,0,1-.241-.289,2.867,2.867,0,0,1,.65-.644,10.961,10.961,0,0,1,.812.77c.674.68.764.8.764.975s-.09.295-.764.975a7.828,7.828,0,0,1-.83.77A1.414,1.414,0,0,1,10.031,6.089Z",transform:"matrix(-0.951, 0.309, -0.309, -0.951, 1308.757, 550.4)",fill:"#fff",stroke:"#fff",strokeWidth:"0.1"}),Object(h.jsx)("path",{d:"M8.81.014C8.551.063,8.419.273,8.3.791c-.054.265-.138.662-.187.885l-.09.4L7.6,2.181l-.427.1-.211-.235C6.072,1.061,5.885.881,5.723.881a5.079,5.079,0,0,0-1.643.867c-.2.168-.175.367.132,1.3l.265.812-.307.313-.307.307-.277-.084c-.15-.042-.517-.162-.812-.265-.722-.241-.885-.241-1.107.036A5.779,5.779,0,0,0,.873,5.725c0,.168.168.343,1.167,1.246l.235.211-.1.427-.108.427-.4.09c-.223.048-.626.132-.9.193C.012,8.475,0,8.5,0,9.606s.012,1.131.77,1.288c.271.06.674.144.9.192l.4.09.108.427.1.427-.235.211c-.987.891-1.167,1.077-1.167,1.239A4.686,4.686,0,0,0,1.829,15.2c.187.1.367.072.945-.12.295-.1.662-.223.812-.265l.277-.084.307.307.307.313-.265.812c-.271.812-.307.987-.235,1.173a4.521,4.521,0,0,0,1.745.993c.162,0,.349-.18,1.24-1.167l.211-.235.427.1.427.108.09.4c.048.223.132.626.193.9.156.758.187.77,1.288.77s1.131-.012,1.288-.77c.06-.271.144-.674.193-.9l.09-.4.427-.108.427-.1.211.235c.9,1,1.077,1.167,1.246,1.167a5.432,5.432,0,0,0,1.577-.818c.259-.247.259-.355-.072-1.348l-.265-.812.307-.313.307-.307.277.084c.15.042.517.162.812.265.7.235.842.235,1.083-.018a5.432,5.432,0,0,0,.818-1.576c0-.181-.1-.295-.927-1.029l-.475-.427.108-.427a2.115,2.115,0,0,1,.126-.433c.012,0,.4-.084.879-.187,1.2-.259,1.161-.217,1.161-1.378s.036-1.119-1.161-1.378c-.475-.1-.867-.186-.879-.186a2.115,2.115,0,0,1-.126-.433l-.108-.427.475-.427c.812-.728.927-.854.927-1.023a5.16,5.16,0,0,0-.866-1.649c-.168-.192-.367-.168-1.3.138l-.812.265-.319-.313-.313-.313.271-.812c.331-.981.337-1.1.072-1.348A5.432,5.432,0,0,0,13.479.881c-.168,0-.343.168-1.246,1.167l-.211.235-.427-.1-.427-.108-.09-.4c-.048-.223-.132-.626-.193-.9C10.729.044,10.687.014,9.73,0,9.309,0,8.894,0,8.81.014Zm1.318,1.805a4.672,4.672,0,0,0,.289.993,1.1,1.1,0,0,0,.439.181c.187.036.548.132.812.217a1.976,1.976,0,0,0,.6.114,7.236,7.236,0,0,0,1.27-1.288c.06-.066.126-.054.379.072l.307.156-.144.463c-.084.259-.2.632-.271.824a2.4,2.4,0,0,0-.12.493,5.306,5.306,0,0,0,1.462,1.468,7.835,7.835,0,0,0,.957-.265l.824-.265.156.277a1.114,1.114,0,0,1,.138.319c-.012.024-.307.307-.668.626a4.117,4.117,0,0,0-.68.722,1.977,1.977,0,0,0,.114.608c.084.265.181.626.217.812a1.209,1.209,0,0,0,.174.439,5.25,5.25,0,0,0,.993.289l.885.192v.674l-.885.193a5.25,5.25,0,0,0-.993.289,1.209,1.209,0,0,0-.175.439c-.036.186-.132.548-.217.812a1.978,1.978,0,0,0-.114.6,7.239,7.239,0,0,0,1.288,1.27c.066.06.054.126-.072.379l-.15.3-.259-.078c-.144-.042-.517-.162-.836-.265a4.788,4.788,0,0,0-.7-.186,5.452,5.452,0,0,0-1.456,1.468,2.4,2.4,0,0,0,.12.493c.072.193.187.566.271.824l.144.463-.307.157c-.253.126-.319.138-.379.072a7.239,7.239,0,0,0-1.27-1.288,1.978,1.978,0,0,0-.6.114c-.265.084-.626.181-.812.217a1.209,1.209,0,0,0-.439.175,5.248,5.248,0,0,0-.289.993l-.193.885H9.261l-.193-.878a4.675,4.675,0,0,0-.289-.993,1.1,1.1,0,0,0-.439-.18c-.187-.036-.548-.132-.812-.217a1.977,1.977,0,0,0-.6-.114A7.2,7.2,0,0,0,5.65,17.181c-.06.066-.12.054-.373-.084l-.3-.162.144-.457c.078-.259.193-.626.265-.818a2.4,2.4,0,0,0,.12-.493A5.452,5.452,0,0,0,4.05,13.7a14.463,14.463,0,0,0-1.619.475c-.15.054-.175.036-.325-.247-.138-.253-.15-.313-.084-.373a7.777,7.777,0,0,0,1.294-1.27,1.977,1.977,0,0,0-.114-.608c-.084-.265-.181-.626-.217-.812a1.1,1.1,0,0,0-.181-.439,4.016,4.016,0,0,0-.993-.289L.933,9.943V9.269l.879-.193A4.018,4.018,0,0,0,2.8,8.787a1.1,1.1,0,0,0,.181-.439c.036-.186.132-.548.217-.812a2.006,2.006,0,0,0,.114-.608,3.718,3.718,0,0,0-.68-.722c-.361-.325-.656-.608-.668-.626a1.114,1.114,0,0,1,.138-.319l.156-.277.463.144c.253.078.626.193.818.265a2.406,2.406,0,0,0,.493.12A5.17,5.17,0,0,0,5.506,4.046a2.4,2.4,0,0,0-.12-.493c-.072-.193-.187-.566-.265-.818l-.144-.463.277-.157a1.116,1.116,0,0,1,.319-.138c.024.012.307.307.626.668a4.113,4.113,0,0,0,.722.68,1.976,1.976,0,0,0,.608-.114c.265-.084.626-.181.812-.217a1.1,1.1,0,0,0,.439-.181,4.674,4.674,0,0,0,.289-.993L9.261.941h.674Z",transform:"matrix(0.951, 0.309, -0.309, 0.951, 1295.899, 550.867)",fill:"#fff",stroke:"#fff",strokeWidth:"0.1"}),Object(h.jsxs)("g",{transform:"translate(1297 558)",fill:"#fff",stroke:"#fff",strokeWidth:"1",children:[Object(h.jsx)("circle",{cx:"5",cy:"5",r:"5",stroke:"none"}),Object(h.jsx)("circle",{cx:"5",cy:"5",r:"4.5",fill:"none"})]})]})]})}))},fe=function(e){return Object(h.jsx)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 46.078 50.805",children:Object(h.jsx)("g",{transform:"translate(-1279.813 -535)",children:Object(h.jsxs)("g",{transform:"translate(1280.313 535)",children:[Object(h.jsx)("rect",{width:"41.005",height:"11.222",transform:"translate(2.036 39.584)"}),Object(h.jsx)("path",{d:"M405.265,861.933v11.243H364.281V849.651h28.7v10.9c0,.658.127,1.039.509,1.209v.169Z",transform:"translate(-362.244 -849.651)"}),Object(h.jsx)("path",{d:"M387.35,858.968H378.8v-8.528Z",transform:"translate(-345.963 -848.766)"}),Object(h.jsx)("rect",{width:"45.078",height:"19.238",transform:"translate(0 20.344)",stroke:"#fff",strokeWidth:"1"})]})})}))},pe=function(e){return Object(h.jsx)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 45.53 45.523",children:Object(h.jsxs)("g",{id:"pie-chart",transform:"translate(0)",children:[Object(h.jsx)("path",{d:"M35.4,65.025a1.626,1.626,0,0,1-1.485-.961A22.762,22.762,0,0,1,54.7,32a1.626,1.626,0,0,1,1.626,1.626V54.762a1.626,1.626,0,0,1-.963,1.485l-19.3,8.632A1.618,1.618,0,0,1,35.4,65.025Z",transform:"translate(-31.931 -32)"}),Object(h.jsx)("path",{d:"M120.258,68.037a.813.813,0,0,0-.974.795V87.122a4.885,4.885,0,0,1-2.886,4.453L98.873,99.417a.813.813,0,0,0-.34,1.2,21.179,21.179,0,0,0,4.924,5.122,21.138,21.138,0,1,0,16.8-37.7Z",transform:"translate(-91.638 -64.36)"})]})}))},ge=function(e){return Object(h.jsxs)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 45 45.525",children:[Object(h.jsx)("path",{d:"M0,0H12.2a0,0,0,0,1,0,0V31.2a0,0,0,0,1,0,0H2.372A2.372,2.372,0,0,1,0,28.826V0A0,0,0,0,1,0,0Z",transform:"translate(0 14.327)"}),Object(h.jsx)("path",{d:"M0,0H28.509a0,0,0,0,1,0,0V29.259A1.939,1.939,0,0,1,26.57,31.2H2.372A2.372,2.372,0,0,1,0,28.826V0A0,0,0,0,1,0,0Z",transform:"translate(16.436 14.327)"}),Object(h.jsx)("path",{d:"M1.177,0H43.823A1.177,1.177,0,0,1,45,1.177v8.955a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.177A1.177,1.177,0,0,1,1.177,0Z"})]}))},ve=a(156),ye=a(157),we=Object(v.a)((function(e){return{templateCard:{width:160,height:160,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(1.5),color:"#628E25",backgroundColor:"#F9F9F9 ",border:"1px solid transparent",borderRadius:16,transition:"all ease 0.2s","& svg":{fontSize:45,marginBottom:e.spacing(1)},"&:hover, &:focus":{color:e.palette.primary.main,borderColor:e.palette.primary.main,boxShadow:"0 0 26px #14141410"}}}})),Ne=function(e){var t=e.icon,a=e.title,n=e.className,c=Object(j.a)(e,["icon","title","className"]),r=we();return Object(h.jsx)(ve.a,{elevation:0,className:"".concat(null!==n&&void 0!==n?n:""," p-3 text-center"),children:Object(h.jsxs)(ye.a,Object(l.a)(Object(l.a)({className:r.templateCard},c),{},{children:[t,Object(h.jsx)(i.a,{variant:"body2",align:"center",children:a})]}))})},Ce=Object(v.a)((function(e){return{create:{height:"calc(100% - 64px)"}}})),Se=function(){var e=Object(r.f)(),t=Ce();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Create Template"}),Object(h.jsx)(ie,{}),Object(h.jsx)("div",{className:"".concat(t.create," container"),children:Object(h.jsxs)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center",children:[Object(h.jsx)(i.a,{align:"center",variant:"h1",gutterBottom:!0,children:"Hello Barry !"}),Object(h.jsx)(i.a,{align:"center",color:"textSecondary",children:"Quickly create your campaign ad. Browse the templates, the ads already created and your feeds"}),Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center my-5",children:[Object(h.jsx)(Ne,{icon:Object(h.jsx)(pe,{}),title:"New Creative Template",onClick:function(){return e.push("/create-template/create")}}),Object(h.jsx)(Ne,{icon:Object(h.jsx)(ge,{}),title:"Creative Templates Library"}),Object(h.jsx)(Ne,{icon:Object(h.jsx)(ue,{}),title:"Ads Creatives"}),Object(h.jsx)(Ne,{icon:Object(h.jsx)(Oe,{}),title:"Automated Creatives"}),Object(h.jsx)(Ne,{icon:Object(h.jsx)(fe,{}),title:"Feed Editor"})]})]})})]})},ke=a.p+"static/media/spash-top-bg.497a0771.svg",Pe=a.p+"static/media/spash-btm-bg.0b873f03.svg",Fe=Object(v.a)((function(e){return{splash:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(1),backgroundImage:"url(".concat(ke,"), url(").concat(Pe,")"),backgroundPosition:"top left, bottom right",backgroundSize:"50%, 50%",backgroundRepeat:"no-repeat","& h1":{fontWeight:500},"& span":{fontWeight:600},"& svg":{fontSize:120,marginBottom:"1rem"},"@media(max-width: 359px)":{padding:e.spacing(2)}}}})),Be=a(168),We=a(158),Ae=function(){var e=Fe(),t=localStorage.getItem("visited"),a=Object(m.useState)(Boolean(t)),n=Object(D.a)(a,2),c=n[0],r=n[1],o=function(){r((function(e){return!e})),localStorage.setItem("visited","true")};return Object(h.jsx)(Be.a,{open:!c,onClose:o,TransitionComponent:We.a,transitionDuration:{exit:500},fullScreen:!0,fullWidth:!0,children:Object(h.jsxs)("div",{className:e.splash,children:[Object(h.jsx)(g,{}),Object(h.jsxs)(i.a,{variant:"h1",color:"textPrimary",align:"center",gutterBottom:!0,children:["Welcome to ",Object(h.jsx)("span",{children:"RTE"})]}),Object(h.jsx)(i.a,{color:"textPrimary",align:"center",className:"mb-4",children:"Create your ads fastly and efficiently."}),Object(h.jsx)(s.a,{variant:"outlined",color:"primary",onClick:o,children:"Get Started"})]})})},Te=a.p+"static/media/ads_bg.1079be12.svg",ze=Object(v.a)((function(e){return{card:function(t){var a=t.color;return{alignSelf:"flex-start",maxWidth:250,marginRight:e.spacing(4),marginBottom:e.spacing(4),padding:e.spacing(1.5),color:a,textAlign:"center",borderImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.1 99.8"><path fill="none" stroke="'.concat(a,'" stroke-dasharray="10" d="M2.9,0.5h94.3c1.3,0,2.4,1.3,2.4,3v92.8c0,1.7-1.1,3-2.4,3H2.9c-1.3,0-2.4-1.3-2.4-3V3.5C0.5,1.8,1.6,0.5,2.9,0.5z"/></svg>\') 15 / 10px  repeat')}}}})),Me=Object(v.a)((function(e){return{create_ads:{height:"100vh",background:"url(".concat(Te,") top right / 60% no-repeat")}}})),He=function(e){var t=e.color,a=e.icon,n=e.title,c=e.iconColor,r=Object(j.a)(e,["color","icon","title","iconColor"]),s=ze({color:t});return Object(h.jsxs)(ve.a,{variant:"outlined",className:"".concat(s.card," ").concat(r.className),children:[Object(h.jsx)(i.a,{align:"center",children:n}),Object(h.jsx)(a,{htmlColor:c,fontSize:"large",className:"mt-4"})]})},Ee=function(){var e=Me();return Object(h.jsx)("div",{className:e.create_ads,children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"d-flex flex-wrap align-content-start col-md-5",children:[Object(h.jsx)(He,{title:"Dynamic Image ads Template",icon:ge,iconColor:"#3AC1EC",color:"rgb(0, 50, 122)"}),Object(h.jsx)(He,{className:"mt-4",title:"Dynamic Video ads Template",icon:ge,iconColor:"",color:"rgb(134,194,50)"}),Object(h.jsx)(He,{title:"Dynamic Feed Creative Automation",icon:fe,iconColor:"#FF725E",color:"rgb(255,114,94)"}),Object(h.jsx)(He,{className:"mt-4",title:"Dynamic Product Catalog Video Creatives",icon:ue,iconColor:"#FBB244",color:"rgb(213,149,53)"})]}),Object(h.jsxs)("div",{className:"col-md-7",children:[Object(h.jsx)(i.a,{variant:"h2",color:"textPrimary",gutterBottom:!0,children:"Create dynamics ads creatives and discover your audiences through unique cross-platform personalization at scale"}),Object(h.jsx)(i.a,{color:"textSecondary",children:"RTE's creative automation enables brands and entreprises to easily plan and put in place marketing persona engagement strategies, at a fraction of today's costs"})]})]})})})},Ve=a(159),Ie=function(e){return Object(h.jsxs)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"0 0 1024 1024",children:[Object(h.jsx)("path",{d:"M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"}),Object(h.jsx)("path",{d:"M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z",fill:"transparent"})]}))},Re=function(e){return Object(h.jsx)(p.a,Object(l.a)(Object(l.a)({},e),{},{viewBox:"7.025 7.025 497.951 497.95",children:Object(h.jsx)("path",{d:"M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"})}))},Le=Object(v.a)((function(e){return{footer:{padding:e.spacing(3,0),backgroundColor:e.palette.secondary.main},logo:{fontSize:"2.5rem"},menu:{display:"flex",flexWrap:"wrap",marginLeft:e.spacing(-2),"& a":{display:"block",marginBottom:e.spacing(1,2),padding:e.spacing(2),color:e.palette.common.white,transition:e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:.2}),"&:hover":{fontWeight:500}}},copyright:{padding:e.spacing(2,0),textAlign:"center",color:"#fff",backgroundColor:"rgba(0, 0, 0, .8)"}}})),Ze=function(){var e=Le();return Object(h.jsxs)("footer",{children:[Object(h.jsx)("div",{className:e.footer,children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)(x,{className:"d-flex align-items-end",href:"/",color:"initial",underline:"none",children:[Object(h.jsx)(g,{className:e.logo}),Object(h.jsx)(i.a,{className:"ml-3 text-white",children:Object(h.jsx)("strong",{children:"RTE Technologies"})})]})}),Object(h.jsxs)("div",{className:"col-md-5",children:[Object(h.jsx)(i.a,{className:"mb-3",color:"primary",variant:"subtitle1",children:Object(h.jsx)("strong",{children:"Links"})}),Object(h.jsxs)("nav",{className:e.menu,children:[Object(h.jsx)(x,{href:"/",underline:"none",children:"Home"}),Object(h.jsx)(x,{href:"/about",underline:"none",children:"About"}),Object(h.jsx)(x,{href:"/pricing",underline:"none",children:"Pricing"}),Object(h.jsx)(x,{href:"/template",underline:"none",children:"Template"}),Object(h.jsx)(x,{href:"/help",underline:"none",children:"Help"}),Object(h.jsx)(x,{href:"/",underline:"none",children:"Terms"}),Object(h.jsx)(x,{href:"/about",underline:"none",children:"Privacy"})]})]}),Object(h.jsxs)("div",{className:"col-md-3",children:[Object(h.jsx)(i.a,{className:"mb-3",color:"primary",variant:"subtitle1",children:Object(h.jsx)("strong",{children:"Suivez-nous"})}),Object(h.jsxs)(f.a,{p:1,component:"nav",children:[Object(h.jsx)(b.a,{href:"https://www.facebook.com",className:"mr-3",children:Object(h.jsx)(Ie,{htmlColor:"#fff"})}),Object(h.jsx)(b.a,{href:"https://www.linkedin.com",className:"mr-3",children:Object(h.jsx)(Re,{htmlColor:"#fff"})}),Object(h.jsx)(b.a,{href:"https://www.linkedin.com",className:"mr-3",children:Object(h.jsx)(Ve.a,{htmlColor:"#fff"})})]})]})]})})}),Object(h.jsx)("div",{className:e.copyright,children:Object(h.jsxs)(i.a,{variant:"body2",children:["\xa9 Copyright ",(new Date).getFullYear()," RTE Technologie"]})})]})},De=a(160),qe=a.p+"static/media/hero.e13bcc66.svg",_e=Object(v.a)((function(e){return{hero:{height:"calc(100vh - 64px)"},help:{position:"fixed",right:"2rem",bottom:"2rem",backgroundColor:"#BD584A"}}})),Ge=a.p+"static/media/brand-1.53d8a353.svg",Qe=a.p+"static/media/brand-2.888aa1db.svg",Ye=a.p+"static/media/brand-3.110666d0.svg",Ke=a.p+"static/media/brand-4.444f17d8.svg",Ue=a.p+"static/media/brand-5.b1f79cb4.svg",Je=function(){var e=_e();return Object(h.jsx)("div",{className:e.hero,children:Object(h.jsxs)("div",{className:"container h-100",children:[Object(h.jsxs)("div",{className:"d-flex flex-column h-100",children:[Object(h.jsxs)("div",{className:"row flex-grow-1",children:[Object(h.jsxs)("div",{className:"col-md-6 d-flex flex-column justify-content-center align-items-start",children:[Object(h.jsxs)(i.a,{variant:"h1",color:"textPrimary",className:"mb-3",children:["Create your ads easily ",Object(h.jsx)("br",{}),"and convert more customers"]}),Object(h.jsx)(i.a,{color:"textSecondary",className:"mb-4",variant:"h6",children:"RTE Technologies is a platform where you can create ads images or video easily that empowers your brands and marketing strategy."}),Object(h.jsx)(x,{button:!0,buttonProps:{variant:"contained",color:"secondary"},href:"/create-template",children:"Create your first design"})]}),Object(h.jsx)("div",{className:"col-md-6 d-flex align-items-center justify-content-end",children:Object(h.jsx)("img",{src:qe,alt:""})})]}),Object(h.jsxs)("div",{className:"flex-grow-0",children:[Object(h.jsx)(i.a,{align:"center",children:"Trusted by world's most innovative global brands and agencies"}),Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center py-4",children:[Object(h.jsx)("img",{src:Ge,className:"mx-5",alt:""}),Object(h.jsx)("img",{src:Qe,className:"mx-5",alt:""}),Object(h.jsx)("img",{src:Ye,className:"mx-5",alt:""}),Object(h.jsx)("img",{src:Ke,className:"mx-5",alt:""}),Object(h.jsx)("img",{src:Ue,className:"mx-5",alt:""})]})]})]}),Object(h.jsx)(De.a,{variant:"extended",size:"small","aria-label":"add",classes:{root:"".concat(e.help," px-4 shadow-none"),label:"text-capitalize text-white"},children:"Help ?"})]})})},Xe=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Bienvenue sur ERT"}),Object(h.jsx)(Ae,{}),Object(h.jsx)(ie,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)(Je,{}),Object(h.jsx)(Ee,{})]}),Object(h.jsx)(Ze,{})]})},$e=a.p+"static/media/404.21ac0a0e.svg",et=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Not Found"}),Object(h.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(h.jsx)("img",{src:$e,alt:"Not Found"})})]})};var tt=function(){return Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:Xe}),Object(h.jsx)(r.a,{path:"/login",component:Y}),Object(h.jsx)(r.a,{path:"/signup",component:$}),Object(h.jsx)(r.a,{path:"/forgot-password",component:B}),Object(h.jsx)(r.a,{path:"/new-password",component:J,exact:!0}),Object(h.jsx)(r.a,{path:"/new-password/success",component:te}),Object(h.jsx)(r.a,{path:"/new-password/error",component:k}),Object(h.jsx)(r.a,{path:"/email-sent",component:C}),Object(h.jsx)(r.a,{path:"/create-template",component:Se,exact:!0}),Object(h.jsx)(r.a,{path:"/create-template/create",component:xe,exact:!0}),Object(h.jsx)(r.a,{path:"*",component:et})]})},at=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},nt=a(162),ct=a(161),rt=a(86),it=Object(rt.a)({typography:{fontFamily:"'Poppins', sans-serif",fontSize:16,htmlFontSize:16,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,h1:{fontSize:"2rem",fontWeight:600,"@media(min-width: 1281px)":{fontSize:"3rem"}},h2:{fontSize:"1.875rem",fontWeight:600,"@media(min-width: 1281px)":{fontSize:"2rem"}},h3:{fontSize:"1.5rem",fontWeight:600},subtitle1:{fontSize:"1.125rem",fontWeight:600},body1:{fontSize:"1rem"},body2:{fontSize:"0.875rem"}},palette:{text:{primary:"#021D31"},primary:{main:"#86C232",dark:"#61892F"},secondary:{main:"#36558F"},common:{white:"#fff"},background:{paper:"#fff"}},overrides:{MuiTypography:{root:{fontFamily:"'Poppins', sans-serif"},gutterBottom:{marginBottom:".5rem"}},MuiButton:{outlined:{padding:"0.5rem 1.5rem",fontSize:".875rem",textTransform:"initial"},contained:{padding:"0.5rem 1.5rem",fontSize:".875rem",textTransform:"initial",whiteSpace:"nowrap"},containedPrimary:{color:"white"}},MuiInputBase:{root:{marginBottom:0}},MuiTextField:{root:{marginBottom:"1.25rem"}},MuiOutlinedInput:{input:{padding:"11.5px 14px",fontSize:".875rem"}},MuiInputLabel:{outlined:{fontSize:".875rem",transform:"translate(14px, 13px) scale(1)"}},MuiFormControlLabel:{label:{fontSize:"0.875rem"}},MuiLink:{root:{color:"#FF725E"}},MuiPaper:{elevation1:{boxShadow:"0 0 3px rgba(0, 0, 0, .25)"}}}}),st=a(65);c.a.render(Object(h.jsxs)(st.a,{basename:"/",children:[Object(h.jsx)(ct.a,{}),Object(h.jsx)(nt.a,{theme:it,children:Object(h.jsx)(tt,{})})]}),document.getElementById("root")),at()}},[[112,1,2]]]);
//# sourceMappingURL=main.ab8d5c7b.chunk.js.map