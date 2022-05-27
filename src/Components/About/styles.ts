import styled from 'styled-components';


export const Container = styled.div`
color: white;
background: linear-gradient(90deg, rgba(103,14,14,1) 0%, rgba(194,8,0,1) 49%, rgba(73,14,14,1) 100%);
 img{
  margin: auto;
  height: 600px;
  position: relative;
  padding-right: 15px;
 }
`

export const Content = styled.div`
  font-weight: bold;
  max-width: 100%;
  height: auto;
  padding-top: 40px;
  position: relative;
  background: rgba(241, 245, 248, 0.322);
  margin: auto;
  width: 70%;
  padding-left: 2rem;
  padding-right:2rem;
  h1{ 
    text-align: center;
    margin-top:-5px;
  }
  p,img{
    display: flex;
  }  
`