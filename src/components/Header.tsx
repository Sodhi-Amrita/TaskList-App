type HeaderProps = {
    title: string;
    totalTasks: number;
}


const Header = ({title, totalTasks }: HeaderProps) => {
    return (
      <header>
        <h1>{title}</h1>
        <h1>Total Number of tasks: {totalTasks}</h1>
      </header>
    );
  };

  export default Header