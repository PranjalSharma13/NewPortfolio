import styled from "styled-components";
import ContactAvatar from "../assets/Pkawaii.png"

const Contact=() =>{
    return(
        <Wrapper>
            <Title>
                Ping Me, Maybe?
            </Title>
            <Headshot src={ContactAvatar}></Headshot>
        </Wrapper>
    )
}
export default Contact;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  margin: 5rem 0rem;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
const Headshot = styled.img`
  border: 2px solid #1772a3;
  width: 400px;
  height: 400px;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  border-radius: 50%;
`;
