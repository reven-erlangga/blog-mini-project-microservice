import React, { useEffect, useState } from "react";

export default function CommentList({ comments }) {
  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
