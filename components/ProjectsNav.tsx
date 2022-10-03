import Link from "next/link";
import { FC } from "react";
import { ProjectInfo } from "../utils/projectUtils";

interface Props {
  articleList: ProjectInfo[];
  currentArticleId?: string;
}

const ProjectsNav: FC<Props> = ({ articleList, currentArticleId }) => {
  return (
    <aside className="col-12 col-md-3 px-4 mb-4">
      <Link href="/projects">
        <h3 className="fs-5 mb-4 clickable">Projects</h3>
      </Link>
      <nav>
        <ul className="list-group list-group">
          {articleList.map(article => {
            return (
              <li
                key={article.id}
                className={`list-group-item ${
                  article.id === currentArticleId
                    ? "active"
                    : article.title === "GoChamp" && "bg-warning"
                }`}
              >
                <Link href={`/projects/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default ProjectsNav;
