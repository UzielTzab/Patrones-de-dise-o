interface CardProfileProps {
  userName: string;
  numberLikes: number;
  numberFollows: number;
}

export function CardProfile({ userName, numberLikes, numberFollows }: CardProfileProps) {
  return (  
    <article>
      <header className="card">

        <img src="https://unavatar.io/sindresorhus@gmail.com" alt="foto random" className="card-image" />
        <div>
          <strong className="heading">{userName}</strong>
          <br />
          <span className="heading">Likes: {numberLikes}</span>
          <br />
          <span className="heading">Follows: {numberFollows}</span>
        </div>
        
      </header>
    </article>
  );
}