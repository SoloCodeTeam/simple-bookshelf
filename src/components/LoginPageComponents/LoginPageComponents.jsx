import React, { useEffect } from 'react';
import './style.css';
function LoginPageComponents() {
  useEffect(() => {
    const handleInput = (e) => {
      const $this = e.target,
        label = $this.previousElementSibling;
      if (e.type === 'keyup') {
        if ($this.value === '') {
          label.classList.remove('active', 'highlight');
        } else {
          label.classList.add('active', 'highlight');
        }
      } else if (e.type === 'blur') {
        if ($this.value === '') {
          label.classList.remove('active', 'highlight');
        } else {
          label.classList.remove('highlight');
        }
      } else if (e.type === 'focus') {
        if ($this.value === '') {
          label.classList.remove('highlight');
        } else {
          label.classList.add('highlight');
        }
      }
    };
    const handleTabClick = (e) => {
      e.preventDefault();
      const tab = e.target.parentNode,
        tabs = Array.from(tab.parentNode.children), // Massivga o'zgartiramiz
        target = e.target.getAttribute('href'),
        tabContents = document.querySelectorAll('.tab-content > div');
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      tabContents.forEach((content) => {
        if ('#' + content.id === target) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    };
    document.querySelectorAll('.form input, .form textarea').forEach((el) => {
      el.addEventListener('keyup', handleInput);
      el.addEventListener('blur', handleInput);
      el.addEventListener('focus', handleInput);
    });
    document.querySelectorAll('.tab a').forEach((el) => {
      el.addEventListener('click', handleTabClick);
    });
    return () => {
      document.querySelectorAll('.form input, .form textarea').forEach((el) => {
        el.removeEventListener('keyup', handleInput);
        el.removeEventListener('blur', handleInput);
        el.removeEventListener('focus', handleInput);
      });

      document.querySelectorAll('.tab a').forEach((el) => {
        el.removeEventListener('click', handleTabClick);
      });
    };
  }, []);
  return (
    <div>
      <div className="form">
        <ul className="tab-group">
          <li className="tab active"><a href="#signup">Sign Up</a></li>
          <li className="tab"><a href="#login">Log In</a></li>
        </ul>

        <div className="tab-content">
          <div id="signup">
            <h1>Sign Up for Free</h1>
            <form action="/" method="post">
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    First Name<span className="req">*</span>
                  </label>
                  <input type="text" required autoComplete="off" />
                </div>
                <div className="field-wrap">
                  <label>
                    Last Name<span className="req">*</span>
                  </label>
                  <input type="text" required autoComplete="off" />
                </div>
              </div>
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autoComplete="off" />
              </div>
              <div className="field-wrap">
                <label>
                  Set A Password<span className="req">*</span>
                </label>
                <input type="password" required autoComplete="off" />
              </div>
              <button type="submit" className="button button-block">Get Started</button>
            </form>
          </div>
          <div id="login">
            <h1>Welcome Back!</h1>
            <form action="/" method="post">
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autoComplete="off" />
              </div>
              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input type="password" required autoComplete="off" />
              </div>
              <p className="forgot"><a href="#">Forgot Password?</a></p>
              <button className="button button-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>);}
export default LoginPageComponents;