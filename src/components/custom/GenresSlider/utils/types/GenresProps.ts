export interface GenresProps {
  list: GenresListItem[] | [];
  bgColor?: string;
}

export interface GenresListItem {
  title: string;
  icon: string;
}
