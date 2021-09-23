(this["webpackJsonpuser-authentication"]=this["webpackJsonpuser-authentication"]||[]).push([[0],{10:function(e,t,n){e.exports={auth:"AuthForm_auth__2v6k0",control:"AuthForm_control__3ZHSb",actions:"AuthForm_actions__2AIuz",toggle:"AuthForm_toggle__3MCvn"}},13:function(e,t,n){e.exports={form:"ProfileForm_form__1jtcb",control:"ProfileForm_control__25Ott",action:"ProfileForm_action__xpLHM"}},16:function(e,t,n){e.exports={header:"MainNavigation_header__J1iHT",logo:"MainNavigation_logo__Mjsh4"}},22:function(e,t,n){e.exports={profile:"UserProfile_profile__1Gmjq"}},23:function(e,t,n){e.exports={starting:"StartingPageContent_starting__X_cPs"}},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o,c=n(1),r=n.n(c),i=n(19),a=n.n(i),s=(n(28),n(2)),l=n(9),j=n(7),u=n(12),b=n(0),d=r.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),h=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},g=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=h(t);return n<=3600?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var r=Object(l.useState)(t),i=Object(u.a)(r,2),a=i[0],s=i[1],j=!!a,g=Object(c.useCallback)((function(){s(null),localStorage.removeItem("token"),o&&clearInterval(o)}),[]);Object(c.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(g,n.duration))}),[n,g]);var O={token:a,isLoggedIn:j,login:function(e,t){s(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=h(t);o=setTimeout(g,n)},logout:g};return Object(b.jsx)(d.Provider,{value:O,children:e.children})},O=d,x=n(16),f=n.n(x),m=function(){var e=Object(c.useContext)(O),t=e.isLoggedIn;return Object(b.jsxs)("header",{className:f.a.header,children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("div",{className:f.a.logo,children:"React Auth"})}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[!t&&Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/auth",children:"Login"})}),t&&Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/profile",children:"Profile"})}),t&&Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},p=function(e){return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{children:e.children})]})},v=n(13),_=n.n(v),w=function(){var e=Object(s.g)(),t=Object(c.useRef)(),n=Object(l.useContext)(O);return Object(b.jsxs)("form",{className:_.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAGbvb-arg3Gcxzdq3euh_btQGD-bUwqjs",{method:"POST",body:JSON.stringify({idToken:n.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("/")}))},children:[Object(b.jsxs)("div",{className:_.a.control,children:[Object(b.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(b.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:t})]}),Object(b.jsx)("div",{className:_.a.action,children:Object(b.jsx)("button",{children:"Change Password"})})]})},S=n(22),k=n.n(S),I=function(){return Object(b.jsxs)("section",{className:k.a.profile,children:[Object(b.jsx)("h1",{children:"Your User Profile"}),Object(b.jsx)(w,{})]})},y=n(10),T=n.n(y),C=function(){var e=Object(s.g)(),t=Object(c.useRef)(""),n=Object(c.useRef)(""),o=Object(c.useContext)(O),r=Object(c.useState)(!0),i=Object(u.a)(r,2),a=i[0],l=i[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),h=d[0],g=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:T.a.auth,children:[Object(b.jsx)("h1",{children:a?"Login":"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r,i=t.current.value,s=n.current.value;g(!0),r=a?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGbvb-arg3Gcxzdq3euh_btQGD-bUwqjs":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGbvb-arg3Gcxzdq3euh_btQGD-bUwqjs",fetch(r,{method:"POST",body:JSON.stringify({email:i,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return g(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication failed")}))})).then((function(t){var n=new Date((new Date).getTime()+1e3*+t.expiresIn);o.login(t.idToken,n.toISOString()),e.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(b.jsxs)("div",{className:T.a.control,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(b.jsx)("input",{type:"email",id:"email",required:!0,ref:t})]}),Object(b.jsxs)("div",{className:T.a.control,children:[Object(b.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(b.jsx)("input",{type:"password",id:"password",required:!0,ref:n})]}),Object(b.jsxs)("div",{className:T.a.actions,children:[!h&&Object(b.jsx)("button",{children:a?"Login":"Create Account"}),h&&Object(b.jsx)("p",{children:"Loading..."}),Object(b.jsx)("button",{type:"button",className:T.a.toggle,onClick:function(){l((function(e){return!e}))},children:a?"Create new account":"Login with existing account"})]})]})]})})},P=function(){return Object(b.jsx)(C,{})},N=n(23),F=n.n(N),L=function(){return Object(b.jsx)("section",{className:F.a.starting,children:Object(b.jsx)("h1",{children:"Welcome on Board!"})})},A=function(){return Object(b.jsx)(L,{})};var D=function(){var e=Object(l.useContext)(O);return Object(b.jsx)(p,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/",exact:!0,children:Object(b.jsx)(A,{})}),!e.isLoggedIn&&Object(b.jsx)(s.b,{path:"/auth",children:Object(b.jsx)(P,{})}),Object(b.jsxs)(s.b,{path:"/profile",children:[e.isLoggedIn&&Object(b.jsx)(I,{}),!e.isLoggedIn&&Object(b.jsx)(s.a,{to:"/auth"})]}),Object(b.jsx)(s.b,{Path:"*",children:Object(b.jsx)(s.a,{to:"/"})})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(D,{})})})}),document.getElementById("root")),G()}},[[35,1,2]]]);
//# sourceMappingURL=main.59233a64.chunk.js.map