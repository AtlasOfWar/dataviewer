import { makeStyles, createStyles } from '@material-ui/core/styles';
import { size } from 'lodash';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './pontuacao.css';
import Ranking from '../Ranking';

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0,
};

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  return (
    <>
      <Ranking nome1="oi" nome2="eae" nome3="salve" />
      <div className="arrumarTudo">
        <div className="primeiro">
          <p>Filipe Dantas</p>
        </div>
        <div className="segundo">
          <p>Pedro Barreto Dantas</p>
        </div>
        <div className="terceiro">
          <p>Rafael Madruga Paties</p>
        </div>
        <div className="alunos">
          <p>ALUNOS</p>
        </div>
        <div className="pontos">
          <p>PONTOS</p>
        </div>
        <div className="pont1">
          <p>635</p>
        </div>
        <div className="pont2">
          <p>600</p>
        </div>
        <div className="pont3">
          <p>550</p>
        </div>
      </div>
    </>
  );
};

export default PromotionForm;
