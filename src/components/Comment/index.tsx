"use client"

import { DiscussionEmbed } from "disqus-react";

export function Comments() {
  return (
    <div>
      <DiscussionEmbed
        shortname="mabica"
        config={{
          url: "http://localhost:3000/audiobooks/stroru/storu-chapter-1",
          identifier: "1",
          title: "storu Chapter 1",
          language: "id_ID", //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </div>
  );
}
