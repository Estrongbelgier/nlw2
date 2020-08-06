import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeachItem from "../../components/TeachItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Those are the teachers available">
        <form id="search-teacher">
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Math", label: "Artes" },
              { value: "Biology", label: "Artes" },
              { value: "Geograph", label: "Artes" },
              { value: "History", label: "Artes" },
              { value: "Math 2", label: "Artes" },
              { value: "Sports", label: "Artes" },
              { value: "Fights", label: "Artes" },
            ]}
          />
          <Select
            name="subject"
            label="Week day"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sabado" },
            ]}
          />
          <Input type="time" name="time" label="Hour"></Input>
        </form>
      </PageHeader>
      <main>
        <TeachItem />
        <TeachItem />
        <TeachItem />
        <TeachItem />
        <TeachItem />
      </main>
    </div>
  );
};

export default TeacherList;
