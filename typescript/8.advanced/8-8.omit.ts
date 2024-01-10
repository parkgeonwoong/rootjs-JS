{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 특정 속성을 제외하고 사용하고 싶을 때
  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
