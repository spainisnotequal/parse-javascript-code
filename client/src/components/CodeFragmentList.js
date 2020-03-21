import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

import CodeFragment from './CodeFragment';

const fragments = [{"author":"one_author","source":"https://github.com/one_author/foo/blob/master/javascripts/baz.js","_id":"5e75c40bf5962e10ef472173","code":"function substract(a, b) {return a - b;};","ast":{"type":"Program","start":0,"end":41,"body":[{"type":"FunctionDeclaration","start":0,"end":40,"id":{"type":"Identifier","start":9,"end":18,"name":"substract"},"expression":false,"generator":false,"async":false,"params":[{"type":"Identifier","start":19,"end":20,"name":"a"},{"type":"Identifier","start":22,"end":23,"name":"b"}],"body":{"type":"BlockStatement","start":25,"end":40,"body":[{"type":"ReturnStatement","start":26,"end":39,"argument":{"type":"BinaryExpression","start":33,"end":38,"left":{"type":"Identifier","start":33,"end":34,"name":"a"},"operator":"-","right":{"type":"Identifier","start":37,"end":38,"name":"b"}}}]}},{"type":"EmptyStatement","start":40,"end":41}],"sourceType":"script"},"__v":0},{"author":"other_author","source":"https://github.com/other_author/foo/blob/master/javascripts/bar.js","_id":"5e75c483f5962e10ef472174","code":"const a = 0;","ast":{"type":"Program","start":0,"end":12,"body":[{"type":"VariableDeclaration","start":0,"end":12,"declarations":[{"type":"VariableDeclarator","start":6,"end":11,"id":{"type":"Identifier","start":6,"end":7,"name":"a"},"init":{"type":"Literal","start":10,"end":11,"value":0,"raw":"0"}}],"kind":"const"}],"sourceType":"script"},"__v":0}];

const CodeFragmentList = props => {
  return (
    <ListGroup>
      { fragments.map ( ({ author, source, code, ast })=> (
        <ListGroupItem>
          <CodeFragment author={author} source={source} code={code} ast={JSON.stringify(ast)} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CodeFragmentList;
