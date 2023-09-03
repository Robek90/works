import React, { useState, useEffect } from 'react';

export default function News(props) {
  let [languagePath, setLanguagePath] = useState(props.languagePath);
  console.log(props);
  return (
    <div>
      <div>Новости{languagePath}</div>
    </div>
  )
}