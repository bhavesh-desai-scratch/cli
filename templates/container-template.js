const {slug, camel} = require('to-case');

module.exports = {
    containerTemplate(name) {
        return `import * as React from 'react';
import { connect } from 'react-redux';

const style: Style = require('./${name}.scss');

interface Style {
  root: string;
}

interface Props {

}

export const ${name} = (props: Props) => {

  return (
    <div className={style.root}>
        ${name}
    </div>
  );
};

function mapStateToProps(state:any): Props {
  return {
  };
}

export const ${name}Connected = connect(mapStateToProps)(${name});`;
    }
};

