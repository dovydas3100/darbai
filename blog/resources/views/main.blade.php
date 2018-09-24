<html>
<head>
    @include('partials._head')
</head>
<body>
    <nav class="navbar bg-primary navbar-dark navbar-expand-lg">
        @include('partials._navbar')
    </nav>
    @include('partials._messages')
    @yield('content')

    @include('partials._footer')
    @include('partials._scripts')
</body>
</html>