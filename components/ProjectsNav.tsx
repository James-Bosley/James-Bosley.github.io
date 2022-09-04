import Link from "next/link";
import { ProjectInfo } from "../utils/projectUtils";

interface Props {
  articleList: ProjectInfo[];
  currentArticleId?: string;
}

const ProjectsNav = ({ articleList, currentArticleId }: Props) => {
  return (
    <aside className="col-3 border-end">
      <h3 className="fs-5 mb-4">Projects</h3>
      <nav>
        <ul className="list-group list-group">
          {articleList.map(article => {
            return (
              <li
                key={article.id}
                className={`list-group-item ${article.id === currentArticleId ? "active" : ""}`}
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
