import React, {useState} from 'react';
import {Button, Tag, P, Htag, Rating} from '../components';

function Home(): JSX.Element{
      const [rating, setRating] = useState<number>(0);
  return (
      <>
        <P size="s">My name is Arthur Davidov !!!</P>
        <P>My name is Arthur Davidov !!!</P>
        <P size="l">My name is Arthur Davidov !!!</P>
        <Button appearance={"primary"} arrow="right">Button</Button>
        <Button appearance={"ghost"} arrow="down">Submit</Button>
        <Htag tag="h3">Hello World!</Htag>
        <Htag tag="h2">Hello World!</Htag>
        <Htag tag="h1">Hello World!</Htag>
        <Tag size="m" color="grey">10</Tag>
        <Tag size="s" color="green">- 10 000 ₽</Tag>
        <Tag size="s" color="ghost">Photoshop</Tag>
        <Tag size="m" color="red" href='https://hh.ru/'>hh.ru</Tag>
        <Tag size="s" color="primary" href='https://www.google.com/'>Работа в Photoshop</Tag>
        <Rating rating={rating} setRating={setRating} isEditable={true} />
      </>
  );
}

export default Home;
