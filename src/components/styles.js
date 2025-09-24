import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 3rem;
  background: #f5f7fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`

export const ProfileSection = styled.div`
  flex: 1;
`

export const InfoSection = styled.div`
  flex: 2;
`

export const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
`

export const ChartCard = styled(Card)`
  text-align: left;
  padding: 2rem;
`

export const Avatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Heading = styled.h1`
  font-size: 1.8rem;
  color: #2d3e50;
  margin-bottom: 0.2rem;
`

export const Subheading = styled.p`
  color: #555;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const ContactItem = styled.p`
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #444;
  margin: 0.5rem 0;

  svg {
    color: #4a90e2;
  }
`
