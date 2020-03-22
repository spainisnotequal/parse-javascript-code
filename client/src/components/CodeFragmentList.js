import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";

import CodeFragment from "./CodeFragment";

const CodeFragmentList = props => {
  const [fragments, setFragments] = useState([]);
  axios.get("/api/codeFragments").then(res => {
    setFragments(res.data);
  });
  return (
    <ListGroup>
      {fragments.map(({ _id, author, source, code, ast }) => (
        <ListGroupItem key={_id}>
          <CodeFragment
            author={author}
            source={source}
            code={code}
            ast={JSON.stringify(ast)}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CodeFragmentList;
