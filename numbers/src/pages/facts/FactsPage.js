import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,

} from 'reactstrap';
import numbers from '../../utils/images/numbers.jpg';
import Facts from '../../components/Facts';

function FactsPage() {

  return (
        <>
        <Card inverse id="factsCard">
            <CardImg
            alt="Card image cap"
            src={numbers}
            style={{
                height: 350
            }}
            width="100%"
            />
            <CardImgOverlay>
            <CardTitle tag="h5">
                Math Facts
            </CardTitle>
            <CardText id="factsText">
                <Facts />
            </CardText>
            <CardText>
                <small className="text-muted">
                Brought to you by the Numbers API
                </small>
            </CardText>
            </CardImgOverlay>
        </Card>
        </>
  );
}

export default FactsPage;