import React from 'react';
import '../styles/MyProjects.css';
import { Theme } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import webpic from '../../assets/webpic.jpeg';

const MyProjects = () => {
  const cardClass = `lg:relative w-full sm:w-4/5 md:w-3/5 h-max lg:w-[400px] lg:h-[450px] lg:mb-0 flex flex-col items-center rounded-md text-white ${Theme.bgPrimaryColor} shadow-md shadow-black/50`;
  const cardTitleClass = 'w-full p-3 text-left text-2xl font-medium';
  const cardTagsClass = `w-full pl-4 pb-2 text-md ${Theme.textSecondaryColor} text-left italic`;
  const cardTextClass = 'w-full p-4 text-lg text-justify';
  const cardFooterClass = 'lg:absolute lg:bottom-0 w-full mt-4 flex';

  return (
    <section className={'w-full flex flex-col items-center'}>
      <h1 className={`w-full mt-[50px] text-3xl text-center`}>My projects</h1>
      <div
        id={'cards-grid'}
        className={'w-4/5 my-[80px] grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 place-items-center'}
      >
        <div className={cardClass}>
          <div className={'w-full rounded-t-md'}>
            <img className={'rounded-t-md'} src={webpic} alt={''} />
          </div>
          <h3 className={cardTitleClass}>Eportfolio - 2023</h3>
          <div className={cardTagsClass}>React.JS, Tailwind CSS</div>
          <span className={cardTextClass}>
            The website you're currently browsing, presenting me and my projects
          </span>
          <div className={cardFooterClass}>
            <Link
              className={'bg-[#444] border-r border-[#333] rounded-bl-md p-1 w-1/2 text-center text-2xl'}
              to={'/eportfolio'}
            >
              Try it
            </Link>
            <a
              className={'bg-[#444] border-l border-[#333] rounded-br-md p-1 w-1/2 text-center text-3xl'}
              href={'https://github.com/Lubabalo-sira/lubabalozenzile_eportfolio'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
