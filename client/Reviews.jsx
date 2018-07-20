import React from 'react';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {
      satisfied: 'I love this product!!',
      unhappy: 'Arrived late and damaged :('
    };
  }

  render() {
    const {unhappy} = this.state;
    return (
      <div>
        <div>
          <h3><strong>JenSpring50214</strong> "{this.state.satisfied}"</h3>
          <p>
            My new cames with how nice the photos come out.
          </p>
          <span>
          Verified Buyer 2010
          </span>
        </div>
        <div>
          <h3>
          <strong>
          SpaceCadetHero421
          </strong>
            {unhappy}
          </h3>
          <p>I bought this item from yourphotogrpahywarehouse hoping to replace my old starter DSLR. I was extremely dissapointed when it arrived with the lens cracked in half due to poor packaging. I would not purchase from yourphotographywarehouse ever again.</p>
          <span>Verified Buyer 2011</span>
        </div>
      </div>
    );
  }
}
