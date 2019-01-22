import React, { Component } from 'react';
import { storage }   from 'config/fbConfig'

class FileUploadFirebase extends Component {
  state = {
    progress: 0,
    image: null,
    url: '',
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  onFileSelect = event => {
    console.log(event.target.files[0]);
    if(event.target.files[0]) {
      const imageInfo = event.target.files[0]
      this.setState({
        image: imageInfo
      })
    }
  }
/* https://firebase.google.com/docs/storage/web/upload-files?authuser=0
  파이어베이스 스토리지로 파일업로드   
  1. Cloud Storage에 파일을 업로드하려면 우선 파일 이름을 포함하여 파일의 전체 경로를 가리키는 참조를 만듭니다.
  2. put()메소드 호출하면 실제업로드 되네.. 이건 간단하긴 하네여.
  3. 업로드관리가 가능 uploadTask로 pause, resue cancel
  4. 업로드진행률모니터링
 */
  onFileUpload = () => {    
    const {image} = this.state;
    console.log(image)
    
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    //uploadTask.on('state_changed', progress, error, complete);
    uploadTask.on('state_changed',
    (snapshot) => {
      // progress function
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
      // error function
      console.log(error);
    }, 
    ()=> {
      // complete function
      storage.ref('images').child(image.name).getDownloadURL().then(
        url => {
          console.log(url);        
          this.setState({url});

          // 메타데이타 가져오기
          // Create a reference to the file whose metadata we want to retrieve
          //var forestRef = storage.ref('images').child('mcavoy.PNG');
          var forestRef = storage.ref('images');
          // Get metadata properties
          forestRef.getMetadata().then(function(metadata) {
            // Metadata now contains the metadata for 'images/forest.jpg'
            console.log(metadata)
          }).catch(function(error) {
            // Uh-oh, an error occurred!
          });

      })
    });
  }
  
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">파이어베이스에 파일업로드 공부중</h5>

          <div className="input-field">
            <progress value={this.state.progress} />
          </div>

          <div className="input-field">
            <input type="file" onChange={this.onFileSelect}/>
            <button onClick={this.onFileUpload}>Upload</button>
          </div>   

          <br/>
          <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="upload" width="300" height="400"/>
                 
        </form>
      </div>
    )
  }
}

export default FileUploadFirebase