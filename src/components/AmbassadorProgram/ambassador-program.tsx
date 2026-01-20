import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1c1c1c;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const Title = styled.h1`
  font-size: 2.75rem;
  text-align: center;
  font-weight: 700;
  color: #202020;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.15rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #e94e1b;
  font-weight: 600;
  margin-bottom: 1.25rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    left: 0;
    width: 60%;
    height: 3px;
    background: #e94e1b;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

const BenefitList = styled.ul`
  list-style: decimal;
  padding-left: 1.5rem;
  margin-top: 1.5rem;

  li {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
    color: #555;
  }

  @media (max-width: 768px) {
    margin-top: 1.25rem;
    padding-left: 1.25rem;

    li {
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    padding-left: 1rem;

    li {
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const InfoBox = styled.div`
  background: #f9f9f9;
  border-left: 4px solid #e94e1b;
  padding: 1.5rem 1.75rem;
  border-radius: 6px;
  margin: 2rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #444;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;

    p {
      font-size: 0.98rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 1.25rem;
    margin: 1.5rem 0;

    p {
      font-size: 0.9rem;
    }
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    overflow: hidden;

    th {
      background: #e94e1b;
      color: white;
      font-weight: 600;
      text-align: left;
      padding: 1rem 1.25rem;
      font-size: 1rem;
    }

    td {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid #efefef;
      font-size: 0.98rem;
      color: #333;
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover td {
      background: #f9f9f9;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

    table th,
    table td {
      padding: 0.85rem 1rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    overflow-x: auto;

    table th,
    table td {
      padding: 0.75rem 0.75rem;
      font-size: 0.8rem;
    }

    table th {
      font-size: 0.85rem;
    }
  }
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.75rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const StepCard = styled.div`
  background: #fff;
  border: 1.5px solid #e94e1b;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.25s ease;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.1);
  }

  .step-number {
    font-size: 2rem;
    font-weight: 700;
    color: #e94e1b;
    margin-bottom: 0.5rem;
  }

  .step-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 0.4rem;
  }

  .step-desc {
    font-size: 0.98rem;
    color: #666;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;

    .step-number {
      font-size: 1.75rem;
    }

    .step-title {
      font-size: 1rem;
    }

    .step-desc {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .step-number {
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
    }

    .step-title {
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
    }

    .step-desc {
      font-size: 0.85rem;
    }
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const CTAButton = styled.button`
  background: #e94e1b;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: #d94410;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.75rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
    width: 100%;
  }
`;

const AmbassadorProgram = () => {
  const tiers = [
    { teams: '200+', title: 'Champion Ambassador', rewards: '₹30,000 Cash + Train fare (2 persons, up to ₹5,000) + All lower tier rewards' },
    { teams: '150', title: 'Mega Ambassador', rewards: '₹20,000 Cash + Train fare (1 person) + All lower tier rewards' },
    { teams: '100', title: 'Elite Ambassador', rewards: '₹15,000 Cash + All lower tier rewards' },
    { teams: '75', title: 'Pro Ambassador', rewards: '₹10,000 Cash + All lower tier rewards' },
    { teams: '50', title: 'Advanced Ambassador', rewards: '₹7,500 Cash + All lower tier rewards' },
    { teams: '25', title: 'Core Ambassador', rewards: '₹5,000 Cash + 1 free team registration + All lower tier rewards' },
    { teams: '15', title: 'Active Ambassador', rewards: 'InCTF branded bag + All lower tier rewards' },
    { teams: '10', title: 'Starter Ambassador', rewards: 'InCTF Certificate + T-shirt + Ambassador Certificate + Website recognition' },
  ];

  return (
    <Container>
      {/* <Title>InCTF Ambassador Program</Title> */}
      {/* <Subtitle>Join us in empowering the next generation of cybersecurity leaders across India.</Subtitle> */}

      <Section>
        <SectionTitle>What is the InCTF Ambassador Program?</SectionTitle>
        <Paragraph>
          The InCTF Ambassador Program is a nationwide initiative by Team bi0s to empower students across India to become cybersecurity leaders in their communities.
        </Paragraph>
        <Paragraph>
          As an InCTF Ambassador, you'll represent the InCTF National Cybersecurity Competition in your college, inspire your peers to participate, and help shape the next generation of cybersecurity talent in India.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Why Become an Ambassador?</SectionTitle>
        <Paragraph>As an Ambassador, you’ll:</Paragraph>
        <BenefitList as="ol">
          <li>Promote cybersecurity awareness and the InCTF competition in your college</li>
          <li>Develop leadership, communication, and community-building skills</li>
          <li>Earn exclusive rewards, recognition, and travel opportunities</li>
          <li>Become part of India’s largest student-driven cybersecurity network</li>
        </BenefitList>
      </Section>

      <Section>
        <SectionTitle>Registration Details</SectionTitle>
        <InfoBox>
          <p><strong>Standard Registration Fee:</strong> ₹799</p>
          <p><strong>With Ambassador Code:</strong> ₹499</p>
          <p style={{ marginTop: '1rem' }}>
            Participants registering using your Ambassador Referral Code receive the discounted price.
          </p>
        </InfoBox>
      </Section>

      <Section>
        <SectionTitle>Rewards & Tiers</SectionTitle>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Teams Registered</th>
                <th>Tier Title</th>
                <th>Rewards & Benefits</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier, idx) => (
                <tr key={idx}>
                  <td>{tier.teams}</td>
                  <td>{tier.title}</td>
                  <td>{tier.rewards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>

        <InfoBox>
          <p>
            <strong>Note:</strong> Rewards are non-cumulative — ambassadors receive benefits based on their final verified team count. 
            Higher tiers include all rewards from lower tiers except cash prizes.
          </p>
        </InfoBox>
      </Section>

       <Section>
        <SectionTitle>Special Benefit for Team bi0s Alumni</SectionTitle>
        <Paragraph>We deeply value our alumni network.</Paragraph>
        <BenefitList>
          <li><strong>Discounted Registration:</strong> ₹399 for teams registering with a bi0s Alumni Referral Code.</li>
          <li><strong>Special Recognition:</strong> Alumni Ambassadors will be acknowledged during the event and featured on official InCTF platforms.</li>
        </BenefitList>
      </Section>
      

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <StepsContainer>
          {[
            { n: 1, title: '', desc: 'Register as an InCTF Ambassador.' },
            { n: 2, title: '', desc: 'Receive your unique referral code.' },
            { n: 3, title: '', desc: 'Share your code with peers — every team that registers with it adds to your count.' },
            { n: 4, title: '', desc: 'Earn rewards based on verified paid registrations.' },
            { n: 5, title: '', desc: 'Top Ambassadors will be invited to the InCTF finals in Bangalore for on-stage recognition.' },
          ].map((s) => (
            <StepCard key={s.n}>
              <div className="step-number">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </StepCard>
          ))}
        </StepsContainer>
      </Section>
        <Section>
        <SectionTitle>Get Your Code</SectionTitle>
        <Paragraph>
          Once you register, you’ll receive your <strong>referral code</strong> by email.

        </Paragraph>
        <Paragraph>
         Share it with your friends, college clubs, and social media to help them join InCTF — and boost your tier ranking!
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Ready to Join?</SectionTitle>
        <Paragraph>
          Share your passion for cybersecurity and empower your peers. Register as an InCTF Ambassador today!
        </Paragraph>
        <CTAButton onClick={() => window.location.href = '/register-ambassador'}>
          Register as Ambassador
        </CTAButton>
      </Section>
    </Container>
  );
};

export default AmbassadorProgram;
