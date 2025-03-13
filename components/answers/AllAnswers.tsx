import { EMPTY_ANSWERS } from "@/constants/states";

import AnswerCard from "../cards/AnswerCard";
import DataRenderer from "../DataRenderer";
import CommonFilter from "../filter/CommonFilter";
import { AnswerFilters } from "@/constants/filters";
import Pagination from "../Pagination";

interface Props extends ActionResponse<Answer[]> {
  page: number;
  isNext: boolean;
  totalAnswers: number;
}

const AllAnswers = ({
  page,
  isNext,
  data,
  success,
  error,
  totalAnswers,
}: Props) => {
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">
          {totalAnswers} {totalAnswers === 1 ? "Answer" : "Answers"}
        </h3>
        <CommonFilter
          filters={AnswerFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <DataRenderer
        data={data}
        error={error}
        success={success}
        empty={EMPTY_ANSWERS}
        render={(answers) =>
          answers.map((answer) => <AnswerCard key={answer._id} {...answer} />)
        }
      />
      <Pagination page={page} isNext={isNext || false} />
    </div>
  );
};

export default AllAnswers;
