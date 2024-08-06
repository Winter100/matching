import { usePlaceholder } from '../_api/usePlaceholder';

const About = () => {
  const { data, isLoading, error } = usePlaceholder(10);

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러</p>;
  if (!data) return <p>데이터가 없습니다.</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default About;
