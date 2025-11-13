- Clone giao diện Thread

1. Công nghệ sử dụng:
- Vite
- React
- JS
- Routing: React Router
- Form: React Hook From
- i18n: React i18next
- Validation: Yup
- Css: Tailwind CSS
- UI Component: Shadcn
- Global State: Redux toolkit / RTK Query
- Http Request: Axios
- Font icon: Font Awesome, Lucide icons(Shadcn), Hero icons(Tailwind) 
- Font family: systerm UI
2. Phân tích layout:
- Layouts: Default layout, auth layout, no layout
	+ Default layout:
	  ++ Navigation
	  ++ Add post button
	+ Auth Layout:
	   ++ Wrapper có background image
	+ No Layout



- Pages: 
	- Default layout:
		+ Home page
			++ Có nhiều page, các page xếp hàng ngang
			++ Mỗi page có một state trong store
			++ Khi có một page trong home page thì click tên user hay bài post thì chuyển trang. Nhưng nếu có nhiều page thì chỉ thay đổi nội dung của page đó
		+ Foryou page
			++ Danh sách các bài post
			++ 
		+ Post detail page
			++ Nội dung bài post và danh sách comment
			++ Modal đăng comment
		+ Following page
			++ Danh sách bài post của những user đã follow
		+ Ghost post page
			++ Danh sách các bài post đã lưu trữ quá 24h
		+ Search pgae
			++ Input
			++ Filter
			++ Follow suggestion
		+ Activity page(heart)
			++ Danh sách các bài viết được gợi ý
		+ Profile page
			++ Thông tin của user(nếu chính là mình thì hiển thị các nút action)
		+ Insight page
			++ Card và chart của Shadcn để hiển thị insight
			(views, interration, follower: by location, by age, by gender)
		+ Setting page
			++ Dùng Sidebar của Shadcn
			++ Có 4 item trong sidebar
		+ Saved page
			++ Danh sách các thread đã lưu
    - Auth layout:
		+ Login page
		+ Register page
		+ Forgot password page
		+ Reset password page
	- No Layout:
		+ Not found page
		+ Embed post page