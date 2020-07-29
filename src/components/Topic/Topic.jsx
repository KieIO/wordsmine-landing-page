import React, { useState } from "react";
import { Row, Col } from "antd";
import Heading from "../Heading/Heading";
import TopicItem from "./components/TopicItem/TopicItem";
import ExtensionImg from "../../assets/img/topic_1.png";
import MobileImg from "../../assets/img/topic_2.png";
import "./Topic.scss";
import { useTranslation } from 'react-i18next';

const Topic = () => {
  const { t } = useTranslation();

  const [topic] = useState([
    {
      name: 'topicWebExtension',
      img:
        "https://assets.quizlet.com/a/i/homepage/topics/science.0262b9325450ec3.png",
    },
    {
      name: 'topicMobileApp',
      img:
        "https://assets.quizlet.com/a/i/homepage/topics/social_science.f080e4570fd49e2.png",
    },
  ]);
  return (
    <section className="topic u-padding-horizontal-section" id="topic">
      <div className="topic__heading">
        <Heading>{t('topicTitle')}</Heading>
      </div>
      <Row justify="center" align="center">
        {topic.map((item, index) => (
          <Col key={index} className="topic__item" lg={6}>
            <TopicItem {...item} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Topic;
