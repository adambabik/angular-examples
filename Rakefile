multitask :default => [:server]

desc "Start server"
task :server, :port do |t, args|
	args.with_defaults(:port => 8181)
	sh "http-server . -p #{args[:port]}"
end

desc "Install all dependencies"
task :install do
	sh "npm install"
end

desc "Prepare application structure"
task :setup do |t, args|
	puts "TODO"
end