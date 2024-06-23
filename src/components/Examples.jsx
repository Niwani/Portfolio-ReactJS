import { useState } from 'react';

import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

import periodicImg from '../assets/Periodic-Table.png'

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()
  
  function handleSelect(selectedButton) {
   setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

  let tabContent = <p>Click to see my Projects</p>


  if(selectedTopic) {
    tabContent = 
    (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <img src={EXAMPLES[selectedTopic].image} width="260px" />
          <p>{EXAMPLES[selectedTopic].link}</p>
        </pre>
      </div>
      )
  }
    return (
        <Section title='Projects' id="examples">
        <Tabs 
        buttons={
        <> 
            <TabButton isSelected={selectedTopic === 'Periodic-Table'} onClick={() => handleSelect('components')}>Periodic-Table</TabButton>
            <TabButton isSelected={selectedTopic === 'Phone'
                } onClick={() => handleSelect('jsx')}>Tic-Tac-Toe Game</TabButton>
            <TabButton  isSelected={selectedTopic === 'Food-order-app'} onClick={() => handleSelect('props')}>Food Order App</TabButton>
            <TabButton isSelected={selectedTopic === 'Todo-List'} onClick={() => handleSelect('state')}>Todo-List</TabButton>
        </>
    }>{tabContent}
        </Tabs>
        <Section title='Experience'>
          <h5>August  2023 - Till date</h5>
          <h3>Truffle Careers and Resources, Nigeria - <i>Human Resources Specialist</i></h3>
          <ul>
            <li>Managed various aspects of the human resources function at Truffle Careers, including recruitment, employee relations, performance management, and HR administration.</li>
            <li>Led recruitment efforts by sourcing, screening, and interviewing candidates for various job positions within the company, ensuring alignment with organizational goals and culture.</li>
            <li>Provided guidance and support to managers and employees on HR-related matters, including performance evaluations, disciplinary actions, and conflict resolution.</li>
            <li>Maintained accurate employee records and HR databases, ensuring data integrity and confidentiality of sensitive information.</li>
          </ul>
          <h5>June 2022 - August  2023</h5>
          <h3>Teraboxx - Intern Front-end Developer</h3>
          <ul>
            <li>Assisted senior developers in software development projects, contributing to coding, testing, and debugging processes to deliver high-quality software solutions within project deadlines.</li>
            <li>Conducted research and analysis on emerging technologies and industry trends, providing valuable insights and recommendations to inform strategic decision-making within the organization.</li>
            <li>Participated in Agile/Scrum meetings and ceremonies, including daily stand-ups, sprint planning, and retrospective meetings, actively contributing ideas and feedback to improve team productivity and project outcomes.</li>
            <li>Assisted in documentation efforts, including writing technical specifications, user manuals, and knowledge base articles, to facilitate effective communication and knowledge sharing among team members.</li>
            <li>Engaged in continuous learning and skill development, participating in training sessions, workshops, and online courses to expand knowledge and expertise in relevant technologies and tools.</li>
          </ul>
          <h5>JJune 2021 - May  2022</h5>
          <h3>Metrospeed Dulux Colour World - Front Desk Officer</h3>
          <ul>
            <li>Warmly greeted and assisted customers and visitors at the front desk of a leading paint company, providing information about products, services, and promotions.</li>
            <li>Managed incoming calls and directed them to the appropriate departments or individuals, effectively handling inquiries and requests in a professional manner. Processed customer orders and transactions accurately and efficiently, using the company's sales and inventory management systems.</li>
            <li>Coordinated with sales representatives and warehouse staff to fulfill customer orders and ensure timely delivery of products.</li>
            <li>Assisted with administrative tasks such as data entry, filing, and document management, ensuring accuracy and organization of records.</li>
            <li>Collaborated with sales and marketing teams to support promotional events and campaigns, contributing to the company's sales and customer service objectives.</li>
          </ul>
          <h5>September  2020 - February 2021</h5>
          <h3>Aetiv, Nigeria - Email Marketing Developer</h3>
          <ul>
            <li>Developed and executed email marketing campaigns using HTML, CSS, and the leading email marketing platform, Mailchimp.</li>
            <li>Designed and optimized responsive email templates to ensure consistent rendering across devices and email clients, resulting in improved engagement metrics.</li>
            <li>Implemented automated email workflows including welcome series, drip campaigns, and transactional emails using marketing automation platforms like HubSpot and Marketo.</li>
            <li>Tracked key email marketing metrics using analytics tools like Google Analytics, generated regular reports, analyzed trends, and provided actionable insights to stakeholders for informed decision-making.</li>
            <li>Provided technical support to resolve issues related to email rendering, HTML/CSS coding, email authentication, and integration with third-party systems. Promptly troubleshooted and debugged email campaign errors to ensure seamless execution.</li>
          </ul>
        </Section>
        </Section>
    )
}