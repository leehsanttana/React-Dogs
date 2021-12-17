import styles from "styled-components";

export const Input = styles.div`
  margin-bottom: 1rem;
  
  input{
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background: #eee;
    transition: .2s;

    &:focus,
    &:hover{
      outline:none;
      border-color: #fb1;
      background; #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  label {
    display:block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
  }

  p {
    color: #f31;
    font-size: .875rem;
    margin-top: .25rem;
  }
`;