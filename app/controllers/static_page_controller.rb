class StaticPageController < ApplicationController
  
  def home # home
    @directory_tree = get_directory_tree("/home/tobe/code/itidol/")
    @directory_tree_html = ''
    generate_ul_and_li(@directory_tree_html, @directory_tree)
    @directory_tree_html = ("<div class='tree well'><ul><li>" << @directory_tree_html << "</li></ul></div>").html_safe
    
  end
  

  private

  # add file or directory to array
  def generate_directory_tree(path, array) 
    Dir.entries(path).sort_by{|x| x.downcase}.each do |file| # sort manually
      next if file == '.' || file == '..'
      if File.directory?("#{path}/#{file}")
        array << {file => []} # add the hash object
        generate_directory_tree("#{path}/#{file}", array.last[file]) # inner files in this array
      else
#        array << file # add the file
        array << "#{path}/#{file}"
      end
    end
  end

  
  def get_directory_tree(full_path)
    root = full_path.split("/").last
    directory_tree = {root => []}
#    directory_tree = {full_path => []}
    generate_directory_tree(full_path, directory_tree[root])
    directory_tree
  end

  # generate
  def generate_ul_and_li(html, hash)

    hash.each do |key, value|
      # add key as directory
      html << "<span><i class='icon-minus-sign'></i> #{key}</span> <a href=''><i class='icon-star-o'></i></a> "
      html << "<ul>"
      
      value.each do |file|
        if file.is_a?(Hash)
          html << "<li>"
          generate_ul_and_li(html, file)
          html << "</li>"
        else
          # add file as file
          html << "<li><span><i class='icon-leaf'></i> #{file}</span> <a href=''><i class='icon-star'></i></a></li>"
        end
      end

      html << "</ul>"
    end

  end

  
end
