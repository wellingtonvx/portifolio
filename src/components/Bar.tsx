import { FunctionComponent } from 'react';
import { SkillProps } from '../util/type';

export const Bar: FunctionComponent<{ data: SkillProps }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};
