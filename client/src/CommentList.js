import React from "react";

export default function CommentList({ comments }) {
  const renderedComments = Object.values(comments).map((comment) => {
    let content;

    switch (comment.status) {
      case "approved":
        content = comment.content;
        break;

      case "rejected":
        content = "This comment is rejected";
        break;

      default:
        content = "This comment is awaiting moderation";
        break;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
