import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  //username의 state값을 바꾼다
  const onChangeUsername = (e) => {
    return setUsername(e.target.value);
  };

  //usermessage의 state값을 바꾼다
  const onChangeMessage = (e) => {
    return setMessage(e.target.value);
  };

  const onClick = (e) => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const loginChk = (e) => {
    if (!userid);
    {
      alert('아이디 미입력');
      setUseid('');
    }
    if (!userpwd) {
      alert('비밀번호 미입력');
      setUsepwd('');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        name="userid"
        placeholder="아이디"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <input
        type="password"
        name="userpwd"
        placeholder="비밀번호"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onclick}>확인</button>
    </div>
  );
};

export default EventPractice;

// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//     username: '',
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   handleClick(e) {
//     alert(this.state.message + ':' + this.state.username);
//     this.setState({
//       message: '',
//       username: '',
//     });
//   }

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="이름"
//           value={this.state.username}
//           onChange={this.handleChange}
//         ></input>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나입력"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         ></input>

//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;
