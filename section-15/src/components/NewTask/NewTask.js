import useHttp from '../../Hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
  
  const enterTaskHandler = async (taskText) => {
    
    const transformTask = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
    }

    sendTaskRequest({
      url: 'https://react-http-b185e-default-rtdb.firebaseio.com/tasks.json',
      method: "POST",
      body: {text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    }, transformTask)

  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
