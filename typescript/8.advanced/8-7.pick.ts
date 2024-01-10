{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 특정 몇개의 타입만 뽑아서 사용하고 싶을 때
  type VideoMetadata = Pick<Video, "id" | "title">;

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
